FROM node:alpine AS builder

WORKDIR /opt/app
COPY ./ ./

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]

FROM node:alpine AS runner
WORKDIR /opt/app

ARG APP_ENV=productiongiy
ARG NODE_ENV=production
ARG PORT=3000

ENV APP_ENV=${APP_ENV} \
    NODE_ENV=${NODE_ENV} \
    PORT=${PORT} \
## This allows to access Graphql Playground
#    APOLLO_PRODUCTION_INTROSPECTION=false
#
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nuxtjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /opt/app/nuxt.config.ts ./
#COPY --from=builder /opt/app/public ./public
COPY --from=builder --chown=nuxtjs:nodejs /opt/app/.nuxt ./.nuxt
COPY --from=builder /opt/app/node_modules ./node_modules
COPY --from=builder /opt/app/package.json ./package.json
COPY --from=builder /opt/app/app.vue ./app.vue

USER nuxtjs

EXPOSE ${PORT}

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["npm", "run", "start"]
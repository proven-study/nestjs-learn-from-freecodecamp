# NestJS API

Nest.js fundamentals source code with examples modules, providers, DI, Authentication, GraphQL, Prisma, MongoDB, Postgres, TypeORM, Swagger, Testing, Websockets, Caching, Data Loader, File Upload, CRON, Cookies, Queues, Event Emitter, Streaming, Session, and more.

- Course resources e-book
  - drive link: <https://drive.google.com/file/d/1Xh-iivWrLpGkwnE08hLI3fSnqs-oyQ46/view>
  - local copy: [NestJS Fundamentals.pdf](./files/Nestjs%20Course%20Manual%20Haider%20Malik.pdf)
- Video url: <https://youtu.be/sFnAHC9lLaw>
- Course repo: <https://github.com/HaiderMalik12/nestjs-fundamentals>
- Testing Starter Kit for Module 12
  - drive link: <https://drive.google.com/file/d/1dU4ro10jZaIYAu32MwQFr4UHlY6GFu6O/view>
  - local copy: [NestJS Testing Starter Kit.zip](./files/testing-starter-kit-for-module-12.zip)

## Installation

```bash
yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

### ⭐️ Contents ⭐️

- Module 0
  - [00:00:00](https://youtu.be/sFnAHC9lLaw?t=0) What is NestJS
  - [00:03:01](https://youtu.be/sFnAHC9lLaw?t=181) Create NestJS Project
  - [00:05:30](https://youtu.be/sFnAHC9lLaw?t=330) NestJS Directory Structure
- Module 1
  - [00:07:00](https://youtu.be/sFnAHC9lLaw?t=420) Creating Controller
  - [00:11:07](https://youtu.be/sFnAHC9lLaw?t=667) Creating a Service
  - [00:18:09](https://youtu.be/sFnAHC9lLaw?t=1089) Creating Module
- Module 2
  - [00:24:27](https://youtu.be/sFnAHC9lLaw?t=1467) Middleware
  - [00:32:39](https://youtu.be/sFnAHC9lLaw?t=1959) Exception Filter
  - [00:43:07](https://youtu.be/sFnAHC9lLaw?t=2587) Transform param using ParseIntPipe
  - [00:48:10](https://youtu.be/sFnAHC9lLaw?t=2890) Validate Request Body using class validator
- Module 3
  - [00:52:09](https://youtu.be/sFnAHC9lLaw?t=3129) Custom Providers
  - [01:15:26](https://youtu.be/sFnAHC9lLaw?t=4526) Injection Scopes
  - [01:20:59](https://youtu.be/sFnAHC9lLaw?t=4859) One To Many Relation
- Module 4
  - [01:35:05](https://youtu.be/sFnAHC9lLaw?t=5705) Establish Database Connection
  - [01:43:42](https://youtu.be/sFnAHC9lLaw?t=6222) Create an Entity
  - [01:50:43](https://youtu.be/sFnAHC9lLaw?t=6643) Create and Fetch records from Database
  - [02:08:54](https://youtu.be/sFnAHC9lLaw?t=7734) Pagination
- Module 5
  - [02:17:44](https://youtu.be/sFnAHC9lLaw?t=8264) One to One
  - [02:24:14](https://youtu.be/sFnAHC9lLaw?t=8654) Many to Many relation
- Module 6
  - [02:43:51](https://youtu.be/sFnAHC9lLaw?t=9831) User Signup
  - [03:00:05](https://youtu.be/sFnAHC9lLaw?t=10805) User Login
  - [03:08:12](https://youtu.be/sFnAHC9lLaw?t=11492) Authenticate User with Passport JWT
  - [03:24:42](https://youtu.be/sFnAHC9lLaw?t=11882) Role Based Authentication
  - [03:46:51](https://youtu.be/sFnAHC9lLaw?t=13611) Two Factor Authentication
  - [04:17:41](https://youtu.be/sFnAHC9lLaw?t=15461) API Key Authentication
- Module 7
  - [04:32:52](https://youtu.be/sFnAHC9lLaw?t=15572) Debug NestJS Application
  - [04:37:00](https://youtu.be/sFnAHC9lLaw?t=15720) Migrations
  - [04:49:51](https://youtu.be/sFnAHC9lLaw?t=16791) Seeding
- Module 8
  - [05:02:02](https://youtu.be/sFnAHC9lLaw?t=18122) Custom Configuration
  - [05:24:29](https://youtu.be/sFnAHC9lLaw?t=19469) Validate Env Variables
  - [05:35:48](https://youtu.be/sFnAHC9lLaw?t=20148) Hot Module Reloading
- Module 9
  - [05:45:51](https://youtu.be/sFnAHC9lLaw?t=20751) Swagger Setup
  - [05:52:30](https://youtu.be/sFnAHC9lLaw?t=21150) Document Signup Route
  - [05:58:28](https://youtu.be/sFnAHC9lLaw?t=21408) Create Schema using ApiProperty
  - [06:02:54](https://youtu.be/sFnAHC9lLaw?t=21774) Test JWT Authentication
- Module 10
  - [06:11:40](https://youtu.be/sFnAHC9lLaw?t=22300) Install MongoDB using Docker Compose
  - [06:18:16](https://youtu.be/sFnAHC9lLaw?t=22696) Connect with MongoDB
  - [06:21:24](https://youtu.be/sFnAHC9lLaw?t=22884) Create Schema
  - [06:24:56](https://youtu.be/sFnAHC9lLaw?t=22996) Save Record in Mongo Collection
  - [06:33:08](https://youtu.be/sFnAHC9lLaw?t=23828) Find and Delete
  - [06:38:47](https://youtu.be/sFnAHC9lLaw?t=23927) Populate
- Module 11
  - [06:52:18](https://youtu.be/sFnAHC9lLaw?t=24738) Configure Dev and Production Env
  - [07:01:22](https://youtu.be/sFnAHC9lLaw?t=25282) Push Source Code to Github Repo
  - [07:06:38](https://youtu.be/sFnAHC9lLaw?t=25698) Deploy NestJS Project to Railway
  - [07:15:44](https://youtu.be/sFnAHC9lLaw?t=26144) Install Dotenv to work with TypeORM migrations
  - [07:20:20](https://youtu.be/sFnAHC9lLaw?t=26420) Fixing Env Bugs
- Module 12
  - [07:29:45](https://youtu.be/sFnAHC9lLaw?t=26665) Getting started with Jest
  - [07:37:22](https://youtu.be/sFnAHC9lLaw?t=27442) Auto Mocking
  - [07:55:13](https://youtu.be/sFnAHC9lLaw?t=28513) SpyOn Function
  - [08:05:49](https://youtu.be/sFnAHC9lLaw?t=29169) Unit Test Controller
  - [08:19:35](https://youtu.be/sFnAHC9lLaw?t=29975) Unit Test Service
  - [08:28:19](https://youtu.be/sFnAHC9lLaw?t=30599) E2E Testing
- Module 13
  - [08:41:58](https://youtu.be/sFnAHC9lLaw?t=31318) Speedy Web Compiler with NestJS v10
  - [08:50:31](https://youtu.be/sFnAHC9lLaw?t=31851) Creating Websocket Server
  - [08:59:05](https://youtu.be/sFnAHC9lLaw?t=32325) Send Message from Frontend app
- Module 14
  - [09:05:48](https://youtu.be/sFnAHC9lLaw?t=32768) GraphQL Server Setup
  - [09:13:43](https://youtu.be/sFnAHC9lLaw?t=32823) Define Queries and Mutations
  - [09:20:11](https://youtu.be/sFnAHC9lLaw?t=33211) Resolve Queries
  - [09:25:42](https://youtu.be/sFnAHC9lLaw?t=33542) Resolve Mutations
  - [09:30:35](https://youtu.be/sFnAHC9lLaw?t=33935) Error Handling
- Module 15
  - [09:34:14](https://youtu.be/sFnAHC9lLaw?t=34154) Define Schema for Authentication
  - [09:42:13](https://youtu.be/sFnAHC9lLaw?t=34633) Resolve Auth Queries and Mutations
  - [09:52:47](https://youtu.be/sFnAHC9lLaw?t=35567) Apply Authentication using Auth Guard
- Module 16
  - [10:12:06](https://youtu.be/sFnAHC9lLaw?t=36726) Implement Real time Subscription
- Module 17
  - [10:20:39](https://youtu.be/sFnAHC9lLaw?t=37259) Unit Test Resolver
  - [10:32:02](https://youtu.be/sFnAHC9lLaw?t=37922) End to End Tesing GraphQL APIs
- Module 18
  - [10:46:55](https://youtu.be/sFnAHC9lLaw?t=39115) Server Side Caching using Apollo
  - [10:58:56](https://youtu.be/sFnAHC9lLaw?t=39576) Optimize Query Performance using Data Loader
  - [11:14:06](https://youtu.be/sFnAHC9lLaw?t=40446) Fetching Data from External REST API
- Module 19
  - [11:20:56](https://youtu.be/sFnAHC9lLaw?t=40816) Setup Prisma
  - [11:24:25](https://youtu.be/sFnAHC9lLaw?t=41065) Models and Migrations
  - [11:28:08](https://youtu.be/sFnAHC9lLaw?t=41248) Generate Prisma Client
  - [11:30:43](https://youtu.be/sFnAHC9lLaw?t=41383) Create, Find and FindOne
  - [11:40:57](https://youtu.be/sFnAHC9lLaw?t=42057) Update and Delete Operation
  - [11:49:17](https://youtu.be/sFnAHC9lLaw?t=42557) One to Many Relation
  - [12:00:54](https://youtu.be/sFnAHC9lLaw?t=43314) One to One Relation
  - [12:07:33](https://youtu.be/sFnAHC9lLaw?t=44253) Many to Many Relation
  - [12:20:35](https://youtu.be/sFnAHC9lLaw?t=44735) Bulk or Batch Operations
  - [12:24:29](https://youtu.be/sFnAHC9lLaw?t=45329) Implement Transaction using Nested Queries
  - [12:32:56](https://youtu.be/sFnAHC9lLaw?t=45876) Interactive Transactions
- Module 20
  - [12:46:08](https://youtu.be/sFnAHC9lLaw?t=46268) File Upload
  - [12:56:12](https://youtu.be/sFnAHC9lLaw?t=46972) Custom Decorator
  - [13:02:03](https://youtu.be/sFnAHC9lLaw?t=47523) Scheduling CRON Task with Nest.js
  - [13:14:41](https://youtu.be/sFnAHC9lLaw?t=48881) Cookies
  - [13:23:03](https://youtu.be/sFnAHC9lLaw?t=49683) Queues
  - [13:35:43](https://youtu.be/sFnAHC9lLaw?t=50143) Event Emitter
  - [13:47:13](https://youtu.be/sFnAHC9lLaw?t=50443) Streaming
  - [13:52:55](https://youtu.be/sFnAHC9lLaw?t=50675) Session

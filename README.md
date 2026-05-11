# gRPC Filtering Monorepo

## Architecture

Two services are included:

### Producer Service
Responsibilities:
- Reads `users.json`
- Filters users with `age > 18`
- Exposes a gRPC endpoint

### Consumer Service
Responsibilities:
- Calls Producer via gRPC
- Displays filtered users
- Exposes HTTP API + Swagger

---

# gRPC Contract

Service: `UserService`

RPC Method:
```proto
rpc GetFilteredUsers(google.protobuf.Empty)
returns (GetFilteredUsersResponse);
```

---

# Run Locally

## Install dependencies

```bash
npm install
```

---

## Start Producer
`npm run start:dev producer-service`

## Start Consumer
`npm run start:dev consumer-service`

Swagger: `http://localhost:30110/api/docs`

# Run With Docker
## Build and start all services
`docker compose up --build`


# Stop containers

```bash
docker compose down
```

---

# Environment Variables

```env
PORT=30110
PRODUCER_URL=0.0.0.0:50051
USERS_FILE_PATH=/data/users.json
```
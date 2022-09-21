# User Management Challenge

- A time frame of 1 hour was allocated to measure how far into the test an applicant might get to. 

- This test was solved with nextJS due to popular demand.

![](./assets/user-management.png)

## Get Started

```
docker run -d -p 6379:6379 --name redis redis

nvm use
npm ci
npm run dev
```

## Implemented
 - API: Basic CRUD api with naive validation
 - Form: Create / Update User with access levels
 - Grid: Display all users
 - Actions: Delete a user
 - Create, Update and Delete updates grid display
 - Basic error Handling

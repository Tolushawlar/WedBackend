# Wedding Coordinator Backend API

Simple REST API for wedding coordinator booking application.

## Deployment

The API is deployed on Render: https://wedbackend-w31f.onrender.com/api

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Create `.env` file with:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   NODE_ENV=development
   ```

3. Start server:
   ```
   npm start
   ```

## API Routes

### Coordinators

#### GET /api/coordinators
Get all wedding coordinators.

**Query Parameters:**
- `search` (optional): Search by name or location

**Response:**
```json
[
  {
    "_id": "coordinatorId",
    "name": "Sarah Johnson",
    "location": "New York, NY",
    "price": 2500,
    "profilePhoto": "https://example.com/photo.jpg",
    "bio": "Experienced wedding coordinator...",
    "rating": 4.8,
    "reviewCount": 127,
    "specialties": ["City Weddings", "Luxury Events"],
    "phone": "(555) 123-4567",
    "email": "sarah@example.com"
  }
]
```

#### GET /api/coordinators/:id
Get a specific coordinator by ID.

**Response:**
```json
{
  "_id": "coordinatorId",
  "name": "Sarah Johnson",
  "location": "New York, NY",
  "price": 2500,
  "profilePhoto": "https://example.com/photo.jpg",
  "bio": "Experienced wedding coordinator...",
  "rating": 4.8,
  "reviewCount": 127,
  "specialties": ["City Weddings", "Luxury Events"],
  "phone": "(555) 123-4567",
  "email": "sarah@example.com"
}
```

### Bookings

#### GET /api/bookings
Get all booking requests.

**Response:**
```json
[
  {
    "_id": "bookingId",
    "coordinatorId": "coordinatorId",
    "name": "John Smith",
    "email": "john@example.com",
    "weddingDate": "2024-12-31T00:00:00.000Z",
    "guestNumber": 100,
    "status": "pending",
    "createdAt": "2023-10-15T12:00:00.000Z",
    "updatedAt": "2023-10-15T12:00:00.000Z"
  }
]
```

#### POST /api/bookings
Create a new booking request.

**Request Body:**
```json
{
  "coordinatorId": "coordinatorId",
  "name": "John Smith",
  "email": "john@example.com",
  "weddingDate": "2024-12-31T00:00:00.000Z",
  "guestNumber": 100
}
```

**Response:**
```json
{
  "_id": "bookingId",
  "coordinatorId": "coordinatorId",
  "name": "John Smith",
  "email": "john@example.com",
  "weddingDate": "2024-12-31T00:00:00.000Z",
  "guestNumber": 100,
  "status": "pending",
  "createdAt": "2023-10-15T12:00:00.000Z",
  "updatedAt": "2023-10-15T12:00:00.000Z"
}
```
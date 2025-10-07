# AirBooking
## ✈️ ER Diagram — AirBooking System

```mermaid
erDiagram
    USERS {
        int user_id
        string full_name
        string email
        string password
        string phone
    }

    FLIGHTS {
        int flight_id
        string flight_number
        string departure_city
        string arrival_city
        datetime departure_time
        datetime arrival_time
        int available_seats
        float price
    }

    BOOKINGS {
        int booking_id
        datetime booking_date
        string status
        int user_id
        int flight_id
    }

    PAYMENTS {
        int payment_id
        datetime payment_date
        float amount
        string payment_method
        int booking_id
    }

    AIRLINES {
        int airline_id
        string name
        string code
        string country
    }

    PLANES {
        int plane_id
        string model
        int capacity
        int airline_id
    }

    ## Relationships
    AIRLINES ||--o{ PLANES : owns
    PLANES ||--o{ FLIGHTS : operates
    USERS ||--o{ BOOKINGS : makes
    FLIGHTS ||--o{ BOOKINGS : has
    BOOKINGS ||--o{ PAYMENTS : includes

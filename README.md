
### Conducting a test of the **Ruby on Rails server** through CORS and the **Vite + Vue frontend**

![1](https://github.com/user-attachments/assets/7010b25a-f4c5-40e6-bb01-1620084437d3)


# Project Setup

## Prerequisites

- Ruby and Node.js installed
- Bundler and npm (or yarn) installed globally

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/andrijzyn/RailsAsAPI-CORS.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd RailsAsAPI-CORS
    ```

3. **Install Ruby dependencies:**
    ```bash
    bundle install
    ```

4. **Install JavaScript dependencies:**
    ```bash
    yarn install
    ```

## Database Setup

- **Run migrations:**
    ```bash
    bin/rails db:migrate
    ```

## Running the Development Server

1. **Start the Rails server:**
    ```bash
    bin/rails server -b 0.0.0.0 -p 3000 -e development
    ```

2. **Start the frontend development server:**
    ```bash
    npm run dev
    ```

## Building for Production

- **Precompile assets:**
    ```bash
    RAILS_ENV=production bin/rails assets:precompile
    ```

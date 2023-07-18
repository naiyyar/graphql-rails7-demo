# graphql-rails7-demo

## How To Setup

### Prerequisites
 - The Ruby programming language and the Ruby on Rails framework installed on your development machine

**Step 1 — Setting Up a New Rails API Application**

`rails new graphql_fun --api --skip-test`

**Create Models**

`rails g model User email:string name:string`

`rails g model Post user:belongs_to title:string body:text`

`rails db:migrate`

Now you can use to create demo data using `gem faker`. see the `seed.rb`


**Step 2 — Setting Up GraphQL for Rails**

In Gemfile add `gem graphql` and `gem graphiql-rails`

`bundle install`

To see available generators use `rails generate`

`rails g graphql:install`

Now update the `routes.rb` to mount the GraphiQL engine in the development environment

```
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "graphql#execute"
  end
```

Next, uncomment or add the require "sprockets/railtie" in `config/application.rb`

Now create a `config` directory at `app/assets` and create a `manifest.js` under `config` directory

Add the following code to the file which tells Rails to precompile the `graphiql/rails/application.css` and `graphiql/rails/application.js` files.

That's all. 

Restart your rails server and visit `localhost:3000/graphiql` to view the GraphiQL query editor.
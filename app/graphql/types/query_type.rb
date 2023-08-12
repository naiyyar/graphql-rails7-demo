module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    #include GraphQL::Types::Relay::HasNodeField
    #include GraphQL::Types::Relay::HasNodesField

    field :users, [Types::UserType], null: false
    field :user, Types::UserType, null: false do
      argument :id, ID, required: true
    end

    def users
      User.all
    end

    def user id: nil
      User.find(id)
    end
  end
end

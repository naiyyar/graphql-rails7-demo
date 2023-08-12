class Inputs::CreatePostInput < Types::BaseInputObject
  description "Post create"
   argument :title, String, required: true
  argument :body, String, required: true
  argument :user_id, String, required: true
end

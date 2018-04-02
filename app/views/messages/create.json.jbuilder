  json.(@message, :id, :body, :image, :created_at)
  json.name @message.user.name

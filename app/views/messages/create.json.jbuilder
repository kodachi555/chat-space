  json.(@message, :body, :image, :created_at)
  json.name @message.user.name

FactoryGirl.define do
  factory :message do
    content Faker::Lorem.sentence
    image File.open("#{Rails.root}/public/images/no_image.jpg")
    # image
    user
    group
  end
end

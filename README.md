# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :groups
- belongs_to :users


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|text|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|
|message_id|integer|null: false, foreign_key: true|

### Association
- has_many :messages
- has_many :groups :through => :messages


## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|text|null: false|
|message_id|integer|null: false|

### Assiociation
- has_many :messages
- has_many :users :through => :messages

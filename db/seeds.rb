# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# == Schema Information
#
# Table name: boards
#
#  id                :integer          not null, primary key
#  description       :text
#  privacy_attribute :integer          default(0), not null
#  name              :string(255)      not null
#  image_url         :string(255)      not null
#  user_id           :integer          not null
#  created_at        :datetime
#  updated_at        :datetime
#

includedNames = []
includedSizes = []

500.times do |n|
  lorem = Board.new()
  lorem.description = Faker::Lorem.paragraph(6)
  lorem.name = Faker::Lorem.word
  while includedNames.include?(lorem.name)
    lorem.name = Faker::Lorem.word
  end
  includedNames << lorem.name
  lorem.image_url = "http://lorempixel.com/200/"
  randomSize = 100 + rand(300)
  while includedSizes.include?(randomSize)
    randomSize = 100 + rand(300)
  end
  includedSizes << randomSize

  lorem.image_url.concat(randomSize.to_s)
  puts lorem.image_url
  lorem.user_id = 1
  lorem.save!
end
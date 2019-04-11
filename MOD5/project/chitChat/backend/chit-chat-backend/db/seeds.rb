# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Message.destroy_all

# USERS
# :first_name, :last_name, :native_language, :desired_language

u1 = User.create(first_name: "Benjamin", last_name: "Addai", native_language: "English", desired_language: "Spanish" )
u2 = User.create(first_name: "Pedro", last_name: "Flores", native_language: "Spanish", desired_language: "English" )
u3 = User.create(first_name: "Benjamin", last_name: "Yellin", native_language: "English", desired_language: "Spanish" )
u4 = User.create(first_name: "Shinik", last_name: "Cupo", native_language: "Spanish", desired_language: "English" )
u5 = User.create(first_name: "Chine", last_name: "Anikwe", native_language: "English", desired_language: "Spanish" )
u6 = User.create(first_name: "James", last_name: "Clement", native_language: "Spanish", desired_language: "English" )

# MESSAGE
# :sender_id, :receiver_id, :text_body, :seen

m1 = Message.create(sender: u1, receiver: u2, text_body: "Hello from sender id 1!", seen: false)
m2 = Message.create(sender: u1, receiver: u3, text_body: "Hola from a fellow Ben!", seen: false)
m3 = Message.create(sender: u2, receiver: u3, text_body: "Whats up pimpin?", seen: false)
m4 = Message.create(sender: u3, receiver: u6, text_body: "Hola from sender id 1", seen: false)
m5 = Message.create(sender: u5, receiver: u1, text_body: "Wow, you're pretty popular", seen: false)
m6 = Message.create(sender: u2, receiver: u1, text_body: "Hey!", seen: false)
m7 = Message.create(sender: u4, receiver: u5, text_body: "Sup?", seen: false)
m8 = Message.create(sender: u4, receiver: u5, text_body: "Why wont you reply?", seen: false)

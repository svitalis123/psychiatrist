# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_04_03_225532) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "casenotes", force: :cascade do |t|
    t.string "content"
    t.time "sessiondatetime", default: -> { "CURRENT_TIMESTAMP" }
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "client_id", null: false
    t.bigint "therapist_id", null: false
    t.index ["client_id"], name: "index_casenotes_on_client_id"
    t.index ["therapist_id"], name: "index_casenotes_on_therapist_id"
  end

  create_table "clients", force: :cascade do |t|
    t.string "firstname"
    t.string "lastname"
    t.string "email"
    t.string "condition"
    t.string "bio", default: "client"
    t.decimal "age"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest"
  end

  create_table "journals", force: :cascade do |t|
    t.string "title"
    t.string "content"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "client_id", null: false
    t.index ["client_id"], name: "index_journals_on_client_id"
  end

  create_table "payments", force: :cascade do |t|
    t.string "status", default: "pending"
    t.decimal "amount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "therapist_id", null: false
    t.index ["therapist_id"], name: "index_payments_on_therapist_id"
  end

  create_table "therapists", force: :cascade do |t|
    t.string "firstname"
    t.string "lastname"
    t.string "email"
    t.string "bio", default: "therapist"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest"
  end

  add_foreign_key "casenotes", "clients"
  add_foreign_key "casenotes", "therapists"
  add_foreign_key "journals", "clients"
  add_foreign_key "payments", "therapists"
end

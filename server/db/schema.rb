# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151118220104) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cycles", force: :cascade do |t|
    t.datetime "start"
    t.datetime "end"
    t.integer  "group_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "cycles", ["group_id"], name: "index_cycles_on_group_id", using: :btree

  create_table "groups", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "groups_prossumers", id: false, force: :cascade do |t|
    t.integer "group_id"
    t.integer "prossumer_id"
    t.boolean "is_coordinator"
    t.integer "state"
  end

  add_index "groups_prossumers", ["group_id"], name: "index_groups_prossumers_on_group_id", using: :btree
  add_index "groups_prossumers", ["prossumer_id"], name: "index_groups_prossumers_on_prossumer_id", using: :btree

  create_table "orders", force: :cascade do |t|
    t.integer  "quantity"
    t.integer  "prossumer_id"
    t.integer  "stock_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "orders", ["prossumer_id"], name: "index_orders_on_prossumer_id", using: :btree
  add_index "orders", ["stock_id"], name: "index_orders_on_stock_id", using: :btree

  create_table "product_auths", force: :cascade do |t|
    t.integer  "state"
    t.integer  "group_id"
    t.integer  "product_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "products", force: :cascade do |t|
    t.string   "title"
    t.string   "description"
    t.string   "unit"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "prossumer_id"
    t.float    "ecos"
    t.float    "euros"
  end

  create_table "prossumers", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "encrypted_password"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "salt"
    t.string   "phone"
    t.string   "confirm_hash"
  end

  create_table "sessions", force: :cascade do |t|
    t.string   "session_id", null: false
    t.text     "data"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "sessions", ["session_id"], name: "index_sessions_on_session_id", unique: true, using: :btree
  add_index "sessions", ["updated_at"], name: "index_sessions_on_updated_at", using: :btree

  create_table "stocks", force: :cascade do |t|
    t.integer  "quantity"
    t.float    "unit_price_euros"
    t.float    "unit_price_ecos"
    t.integer  "week_id"
    t.integer  "product_id"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  add_index "stocks", ["product_id"], name: "index_stocks_on_product_id", using: :btree
  add_index "stocks", ["week_id"], name: "index_stocks_on_week_id", using: :btree

  create_table "weeks", force: :cascade do |t|
    t.integer  "number"
    t.integer  "cycle_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "weeks", ["cycle_id"], name: "index_weeks_on_cycle_id", using: :btree

end


export interface ProductResponse {
  query:   string;
  paging:  Paging;
  results: Product[];
}

export interface Paging {
  total:           number;
  primary_results: number;
  offset:          number;
  limit:           number;
}

export interface Product {
  id:                   string;
  title:                string;
  condition:            string;
  thumbnail_id:         string;
  catalog_product_id:   string;
  listing_type_id:      string;
  permalink:            string;
  buying_mode:          string;
  site_id:              string;
  category_id:          string;
  domain_id:            string;
  thumbnail:            string;
  currency_id:          string;
  order_backend:        number;
  price:                number;
  original_price:       number | null;
  sale_price:           null;
  available_quantity:   number;
  official_store_id:    number | null;
  official_store_name?: string;
  use_thumbnail_id:     boolean;
  accepts_mercadopago:  boolean;
  shipping:             Shipping;
  stop_time:            Date;
  seller:               Seller;
  attributes:           Attribute[];
  installments:         Installments;
  winner_item_id:       null;
  catalog_listing:      boolean;
  discounts:            null;
  promotions:           any[];
  inventory_id:         null;
}

export interface Attribute {
  id:                   string;
  name:                 string;
  value_id:             string;
  value_name:           string;
  attribute_group_id:   AttributeGroupID;
  attribute_group_name: AttributeGroupName;
  value_struct:         Struct | null;
  values:               Value[];
  source:               number;
  value_type:           ValueType;
}

export enum AttributeGroupID {
  Others = "OTHERS",
}

export enum AttributeGroupName {
  Otros = "Otros",
}

export interface Struct {
  number: number;
  unit:   Unit;
}

export enum Unit {
  G = "g",
}

export enum ValueType {
  List = "list",
  NumberUnit = "number_unit",
  String = "string",
}

export interface Value {
  id:     string;
  name:   string;
  struct: Struct | null;
  source: number;
}

export interface Installments {
  quantity:    number;
  amount:      number;
  rate:        number;
  currency_id: string;
}

export interface Seller {
  id:       number;
  nickname: string;
}

export interface Shipping {
  store_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  mode:          string;
  tags:          Tag[];
  benefits:      null;
  promise:       null;
}

export enum Tag {
  MandatoryFreeShipping = "mandatory_free_shipping",
  SelfServiceIn = "self_service_in",
  SelfServiceOut = "self_service_out",
}

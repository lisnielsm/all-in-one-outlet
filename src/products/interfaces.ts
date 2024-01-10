export interface ProductResponse {
	query: string;
	paging: Paging;
	results: GeneralProduct[];
}

export interface Paging {
	total: number;
	primary_results: number;
	offset: number;
	limit: number;
}

export interface GeneralProduct {
	id: string;
	title: string;
	condition: string;
	thumbnail_id: string;
	catalog_product_id: string;
	listing_type_id: string;
	permalink: string;
	buying_mode: string;
	site_id: string;
	category_id: string;
	domain_id: string;
	thumbnail: string;
	currency_id: string;
	order_backend: number;
	price: number;
	original_price: number | null;
	sale_price: null;
	available_quantity: number;
	official_store_id: number | null;
	official_store_name?: string;
	use_thumbnail_id: boolean;
	accepts_mercadopago: boolean;
	stop_time: Date;
	seller: Seller;
	attributes: Attribute[];
	installments: Installments;
	winner_item_id: null;
	catalog_listing: boolean;
	discounts: null;
	promotions: any[];
	inventory_id: null;
}

export interface Attribute {
	id: string;
	name: string;
	value_id: string;
	value_name: string;
	attribute_group_id: AttributeGroupID;
	attribute_group_name: AttributeGroupName;
	value_struct: Struct | null;
	values: Value[];
	source: number;
	value_type: ValueType;
}

export enum AttributeGroupID {
	Others = "OTHERS",
}

export enum AttributeGroupName {
	Otros = "Otros",
}

export interface Struct {
	number: number;
	unit: Unit;
}

export enum Unit {
	G = "g",
}

export interface Value {
	id: string;
	name: string;
	struct: Struct | null;
	source: number;
}

export interface Installments {
	quantity: number;
	amount: number;
	rate: number;
	currency_id: string;
}

export interface Seller {
	id: number;
	nickname: string;
}

export enum Tag {
	MandatoryFreeShipping = "mandatory_free_shipping",
	SelfServiceIn = "self_service_in",
	SelfServiceOut = "self_service_out",
}

export interface Description {
	plain_text: string;
}

export interface Product {
	id: string;
	site_id: string;
	title: string;
	seller_id: number;
	category_id: string;
	official_store_id: number;
	price: number;
	base_price: number;
	original_price: number;
	currency_id: string;
	initial_quantity: number;
	sale_terms: Attribute[];
	buying_mode: string;
	listing_type_id: string;
	condition: string;
	permalink: string;
	thumbnail_id: string;
	thumbnail: string;
	pictures: Picture[];
	video_id: null;
	descriptions: any[];
	accepts_mercadopago: boolean;
	non_mercado_pago_payment_methods: any[];
	international_delivery_mode: string;
	seller_address: SellerAddress;
	seller_contact: null;
	coverage_areas: any[];
	attributes: Attribute[];
	listing_source: string;
	variations: any[];
	status: string;
	sub_status: any[];
	tags: string[];
	warranty: string;
	catalog_product_id: string;
	domain_id: string;
	parent_item_id: null;
	deal_ids: string[];
	automatic_relist: boolean;
	date_created: Date;
	last_updated: Date;
	health: null;
	catalog_listing: boolean;
}

export enum ValueType {
	Boolean = "boolean",
	List = "list",
	Number = "number",
	NumberUnit = "number_unit",
	String = "string",
}

export interface Picture {
	id: string;
	url: string;
	secure_url: string;
	size: string;
	max_size: string;
	quality: string;
}

export interface SellerAddress {
	city: City;
	state: City;
	country: City;
	search_location: SearchLocation;
	id: number;
}

export interface City {
	id: string;
	name: string;
}

export interface SearchLocation {
	neighborhood: City;
	city: City;
	state: City;
}

export const PRODUCT_STATE = {
  new: 'New',
  used: 'Used',
}

export const ITEMS_PER_PAGE = 24;

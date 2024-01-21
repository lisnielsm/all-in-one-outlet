export interface Description {
	plain_text: string;
}

export const PRODUCT_STATE = {
	new: 'New',
	used: 'Used',
};

export const ITEMS_PER_PAGE = 24;

export interface ProductError {
	error: string;
	message: string;
}

export interface Alert {
	isShow: boolean;
	isError: boolean;
	message: string;
}

export interface ProductResponse {
	query: string;
	paging: Paging;
	results: GeneralProduct[];
	sort: Sort;
	available_sorts: Sort[];
	filters: Filter[];
	available_filters: AvailableFilter[];
}

export interface AvailableFilter {
	id: string;
	name: string;
	type: Type;
	values: AvailableFilterValue[];
}

export enum Type {
	Boolean = 'boolean',
	List = 'list',
	Number = 'number',
	Range = 'range',
	String = 'STRING',
	Text = 'text',
}

export interface AvailableFilterValue {
	id: string;
	name: string;
	results: number;
}

export interface Sort {
	id: string;
	name: string;
}

export interface Filter {
	id: string;
	name: string;
	type: Type;
	values: FilterValue[];
}

export interface FilterValue {
	id: string;
	name: string;
	path_from_root?: Sort[];
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
	condition: Condition;
	thumbnail_id: string;
	catalog_product_id: null | string;
	listing_type_id: ListingTypeID;
	permalink: string;
	buying_mode: BuyingMode;
	category_id: CategoryID;
	domain_id: DomainID;
	thumbnail: string;
	currency_id: CurrencyID;
	order_backend: number;
	price: number;
	original_price: null;
	sale_price: null;
	available_quantity: number;
	official_store_id: null;
	use_thumbnail_id: boolean;
	accepts_mercadopago: boolean;
	stop_time: Date;
	seller: Seller;
	attributes: Attribute[];
	installments: null;
	winner_item_id: null;
	catalog_listing: boolean;
	discounts: null;
	inventory_id: null;
	variation_id?: string;
	variation_filters?: VariationFilter[];
	variations_data?: { [key: string]: VariationsDatum };
}

export interface Attribute {
	id: ID;
	name: Name;
	value_id: string;
	value_name: null | string;
	attribute_group_id: AttributeGroupID;
	attribute_group_name: AttributeGroupName;
	value_struct: Struct | null;
	values: AttributeValue[];
	source: number;
	value_type: ValueType;
}

export enum AttributeGroupID {
	Others = 'OTHERS',
}

export enum AttributeGroupName {
	Otros = 'Otros',
}

export enum ID {
	Brand = 'BRAND',
	DetailedModel = 'DETAILED_MODEL',
	GPUModel = 'GPU_MODEL',
	ItemCondition = 'ITEM_CONDITION',
	Line = 'LINE',
	Model = 'MODEL',
	ProcessorModel = 'PROCESSOR_MODEL',
	Weight = 'WEIGHT',
}

export enum Name {
	CondiciónDelÍtem = 'Condición del ítem',
	Línea = 'Línea',
	Marca = 'Marca',
	Modelo = 'Modelo',
	ModeloDeGPU = 'Modelo de GPU',
	ModeloDelProcesador = 'Modelo del procesador',
	ModeloDetallado = 'Modelo detallado',
	Peso = 'Peso',
}

export interface AttributeValue {
	id: string;
	name: null | string;
	struct: Struct | null;
	source: number;
}

export enum BuyingMode {
	BuyItNow = 'buy_it_now',
}

export enum CategoryID {
	Mlu1055 = 'MLU1055',
}

export enum Condition {
	New = 'new',
	NotSpecified = 'not_specified',
	Used = 'used',
}

export enum CurrencyID {
	Usd = 'USD',
	Uyu = 'UYU',
}

export enum DomainID {
	MluCellphones = 'MLU-CELLPHONES',
}

export enum ListingTypeID {
	GoldSpecial = 'gold_special',
}

export interface Seller {
	id: number;
	nickname: string;
}

export enum LogisticType {
	Custom = 'custom',
	DropOff = 'drop_off',
	NotSpecified = 'not_specified',
}

export enum Mode {
	Custom = 'custom',
	Me2 = 'me2',
	NotSpecified = 'not_specified',
}

export enum VariationFilter {
	Color = 'COLOR',
}

export interface VariationsDatum {
	thumbnail: string;
	ratio: string;
	name: string;
	pictures_qty: number;
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
	accepts_mercadopago: boolean;
	international_delivery_mode: string;
	seller_contact: null;
	attributes: Attribute[];
	listing_source: string;
	status: string;
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

export interface Struct {
	number: number;
	unit: string;
}

export enum ValueType {
	Boolean = 'boolean',
	List = 'list',
	Number = 'number',
	NumberUnit = 'number_unit',
	String = 'string',
}

export interface Value {
	id: null | string;
	name: string;
	struct: Struct | null;
}

export interface Picture {
	id: string;
	url: string;
	secure_url: string;
	size: string;
	max_size: string;
	quality: string;
}

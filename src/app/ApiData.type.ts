export interface FetchData {
    api_execute_time:     string;
    api_success:          boolean;
    api_messages:         any[];
    api_is_developer:     boolean;
    api_platform_version: null;
    api_code:             number;
    api_authorize:        boolean;
    api_data:             APIData;
    api_data_success:     boolean;
    api_data_result:      boolean;
    api_exception:        any[];
    api_version:          string;
    api_host:             string;
}

export interface APIData {
    aProduct:     AProduct[];
    aFilters:     AFilters;
    iCount:       number;
    iPages:       number;
    iLimit:       number;
    iCurrentPage: number;
    is_filter:    boolean;
    aSort:        ASort;
    sGrid:        string;
}

export interface AFilters {
    colors:    PriceClass;
    sizes:     PriceClass;
    materials: Materials;
    filling:   Ing;
    lining:    Ing;
    price:     PriceClass;
}

export interface PriceClass {
    name:     string;
    selected: any[];
    hidden:   boolean;
    items:    { [key: string]: Item };
}

export interface Item {
    name:         string;
    value?:       null | string;
    exist:        boolean;
    active:       boolean;
    product_ids?: number[];
    id?:          number | string;
}

export interface Ing {
    name:     string;
    selected: any[];
    hidden:   boolean;
    items:    any[];
}

export interface Materials {
    name:     MaterialsEnum;
    selected: any[];
    hidden:   boolean;
    items:    { [key: string]: Item };
}

export enum MaterialsEnum {
    Материал = "Материал",
}

export interface AProduct {
    id:                    number;
    template:              string;
    brand_name:            BrandName;
    category_id:           string;
    category_ids:          string[];
    parent_category_ids:   Array<ParentCategoryID[]>;
    category_name:         string;
    type:                  Type;
    article:               string;
    popular:               number;
    size_details:          any[];
    price:                 number;
    block:                 boolean;
    original_price:        number;
    coming_soon:           boolean;
    date_create:           Date;
    saleaction:            boolean;
    currency:              Currency;
    photos:                Photo[];
    videos:                any[];
    video_cover:           any[];
    favorite:              boolean;
    count:                 number;
    subscribe:             boolean;
    season:                null;
    name_old:              string;
    name:                  string;
    descriptions:          Descriptions;
    material_descriptions: Descriptions;
    measurements:          Measurements;
    measurements_unit:     MeasurementsUnit;
    model:                 Model;
    stores:                any[] | { [key: string]: Store[] };
    sizes:                 { [key: string]: SizeClass };
    is_ffm:                boolean;
    colors:                AProductColors;
    format_price:          string[];
    details_name:          DetailsName;
    details:               Details;
    soldout:               boolean;
    available:             boolean;
}

export enum BrandName {
    Lichi = "Lichi",
}

export interface AProductColors {
    current: Current;
    other:   Other[];
}

export interface Current {
    id:           number;
    name:         string;
    amount:       number;
    value:        string;
    show:         boolean;
    price:        string;
    color_sample: any[] | ColorSampleClass;
}

export interface ColorSampleClass {
    pcs_article: string;
    pcs_index:   number;
    pcs_x:       number;
    pcs_y:       number;
    pcs_path:    string;
    pi_photo:    string;
}

export interface Other {
    id:           number;
    name:         string;
    amount:       number;
    value:        string;
    show:         boolean;
    price:        string;
    color_sample: ColorSampleClass;
    photo:        Photo;
}

export interface Photo {
    thumbs:     Thumbs;
    blurhash:   string;
    basicColor: BasicColor;
    big?:       string;
}

export interface BasicColor {
    colors:    string[];
    luminance: number;
}

export interface Thumbs {
    "768_1024": string;
    "384_512":  string;
}

export interface Currency {
    id:             number;
    prefix:         string;
    prefix_symbol:  string;
    postfix:        Postfix;
    postfix_symbol: PostfixSymbol;
}

export enum Postfix {
    Тнг = "тнг.",
}

export enum PostfixSymbol {
    Empty = "₸",
}

export interface Descriptions {
    mark_down: string;
    html:      string;
    text:      string;
}

export interface Details {
    materials: { [key: string]: Lining };
    lining?:   { [key: string]: Lining };
}

export interface Lining {
    name:    string;
    percent: number;
}

export interface DetailsName {
    materials: MaterialsEnum;
    lining?:   string;
}

export interface Measurements {
    XS: L[];
    S:  L[];
    M:  L[];
    L:  L[];
}

export interface L {
    name:  LName;
    value: number;
}

export enum LName {
    ВысотаРазреза = "Высота разреза",
    ГлубинаВыреза = "Глубина выреза",
    ДлинаИзделияПоБоковомуШву = "Длина изделия по боковому шву",
    ДлинаИзделияПоВнутреннемуШву = "Длина изделия по внутреннему шву",
    ДлинаИзделияПоСпинке = "Длина изделия по спинке",
    ДлинаРукава = "Длина рукава",
    ОбхватБедер = "Обхват бедер",
    ОбхватГруди = "Обхват груди",
    ОбхватТалии = "Обхват талии",
    ШиринаИзделияПоНизу = "Ширина изделия по низу",
    ШиринаПлеч = "Ширина плеч",
    ШиринаРукаваПоНизу = "Ширина рукава по низу",
    ШиринаШтаниныБрюкПоНизу = "Ширина штанины брюк по низу",
    ШиринаЮбкиПоНизу = "Ширина юбки по низу",
}

export enum MeasurementsUnit {
    См = "см",
}

export interface Model {
    size:   NameValue;
    growth: number;
    chest:  number;
    waist:  number;
    hips:   number;
}

export enum NameValue {
    L = "L",
    M = "M",
    S = "S",
    Xs = "XS",
}

export interface ParentCategoryID {
    id:   string;
    url:  string;
    name: string;
}

export interface SizeClass {
    id:        number;
    name:      NameValue;
    amount:    number;
    show:      boolean;
    barcode:   string;
    subscribe: boolean;
}

export interface Store {
    name:       string;
    address:    string;
    work_time:  WorkTime;
    location:   string;
    is_partner: number;
    shop_id:    number;
    sizes:      { [key: string]: NameValue };
}

export enum WorkTime {
    The10001800 = "10:00,18:00",
    The10002200 = "10:00,22:00",
}

export enum Type {
    Clothes = "clothes",
}

export interface ASort {
    newest:  Asc;
    popular: Asc;
    asc:     Asc;
    desc:    Asc;
}

export interface Asc {
    active: boolean;
}

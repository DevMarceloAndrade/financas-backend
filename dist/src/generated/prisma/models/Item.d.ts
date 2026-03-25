import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ItemModel = runtime.Types.Result.DefaultSelection<Prisma.$ItemPayload>;
export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null;
    _avg: ItemAvgAggregateOutputType | null;
    _sum: ItemSumAggregateOutputType | null;
    _min: ItemMinAggregateOutputType | null;
    _max: ItemMaxAggregateOutputType | null;
};
export type ItemAvgAggregateOutputType = {
    forecast: number | null;
};
export type ItemSumAggregateOutputType = {
    forecast: number | null;
};
export type ItemMinAggregateOutputType = {
    id: string | null;
    type: string | null;
    period: string | null;
    group: string | null;
    name: string | null;
    forecast: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ItemMaxAggregateOutputType = {
    id: string | null;
    type: string | null;
    period: string | null;
    group: string | null;
    name: string | null;
    forecast: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ItemCountAggregateOutputType = {
    id: number;
    type: number;
    period: number;
    group: number;
    name: number;
    forecast: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ItemAvgAggregateInputType = {
    forecast?: true;
};
export type ItemSumAggregateInputType = {
    forecast?: true;
};
export type ItemMinAggregateInputType = {
    id?: true;
    type?: true;
    period?: true;
    group?: true;
    name?: true;
    forecast?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ItemMaxAggregateInputType = {
    id?: true;
    type?: true;
    period?: true;
    group?: true;
    name?: true;
    forecast?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ItemCountAggregateInputType = {
    id?: true;
    type?: true;
    period?: true;
    group?: true;
    name?: true;
    forecast?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItemWhereInput;
    orderBy?: Prisma.ItemOrderByWithRelationInput | Prisma.ItemOrderByWithRelationInput[];
    cursor?: Prisma.ItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ItemCountAggregateInputType;
    _avg?: ItemAvgAggregateInputType;
    _sum?: ItemSumAggregateInputType;
    _min?: ItemMinAggregateInputType;
    _max?: ItemMaxAggregateInputType;
};
export type GetItemAggregateType<T extends ItemAggregateArgs> = {
    [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateItem[P]> : Prisma.GetScalarType<T[P], AggregateItem[P]>;
};
export type ItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItemWhereInput;
    orderBy?: Prisma.ItemOrderByWithAggregationInput | Prisma.ItemOrderByWithAggregationInput[];
    by: Prisma.ItemScalarFieldEnum[] | Prisma.ItemScalarFieldEnum;
    having?: Prisma.ItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ItemCountAggregateInputType | true;
    _avg?: ItemAvgAggregateInputType;
    _sum?: ItemSumAggregateInputType;
    _min?: ItemMinAggregateInputType;
    _max?: ItemMaxAggregateInputType;
};
export type ItemGroupByOutputType = {
    id: string;
    type: string;
    period: string;
    group: string;
    name: string;
    forecast: number;
    createdAt: Date;
    updatedAt: Date;
    _count: ItemCountAggregateOutputType | null;
    _avg: ItemAvgAggregateOutputType | null;
    _sum: ItemSumAggregateOutputType | null;
    _min: ItemMinAggregateOutputType | null;
    _max: ItemMaxAggregateOutputType | null;
};
type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ItemGroupByOutputType[P]>;
}>>;
export type ItemWhereInput = {
    AND?: Prisma.ItemWhereInput | Prisma.ItemWhereInput[];
    OR?: Prisma.ItemWhereInput[];
    NOT?: Prisma.ItemWhereInput | Prisma.ItemWhereInput[];
    id?: Prisma.StringFilter<"Item"> | string;
    type?: Prisma.StringFilter<"Item"> | string;
    period?: Prisma.StringFilter<"Item"> | string;
    group?: Prisma.StringFilter<"Item"> | string;
    name?: Prisma.StringFilter<"Item"> | string;
    forecast?: Prisma.FloatFilter<"Item"> | number;
    createdAt?: Prisma.DateTimeFilter<"Item"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Item"> | Date | string;
    transactions?: Prisma.TransactionListRelationFilter;
};
export type ItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    period?: Prisma.SortOrder;
    group?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    forecast?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    transactions?: Prisma.TransactionOrderByRelationAggregateInput;
};
export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ItemWhereInput | Prisma.ItemWhereInput[];
    OR?: Prisma.ItemWhereInput[];
    NOT?: Prisma.ItemWhereInput | Prisma.ItemWhereInput[];
    type?: Prisma.StringFilter<"Item"> | string;
    period?: Prisma.StringFilter<"Item"> | string;
    group?: Prisma.StringFilter<"Item"> | string;
    name?: Prisma.StringFilter<"Item"> | string;
    forecast?: Prisma.FloatFilter<"Item"> | number;
    createdAt?: Prisma.DateTimeFilter<"Item"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Item"> | Date | string;
    transactions?: Prisma.TransactionListRelationFilter;
}, "id">;
export type ItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    period?: Prisma.SortOrder;
    group?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    forecast?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ItemCountOrderByAggregateInput;
    _avg?: Prisma.ItemAvgOrderByAggregateInput;
    _max?: Prisma.ItemMaxOrderByAggregateInput;
    _min?: Prisma.ItemMinOrderByAggregateInput;
    _sum?: Prisma.ItemSumOrderByAggregateInput;
};
export type ItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.ItemScalarWhereWithAggregatesInput | Prisma.ItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.ItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ItemScalarWhereWithAggregatesInput | Prisma.ItemScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Item"> | string;
    type?: Prisma.StringWithAggregatesFilter<"Item"> | string;
    period?: Prisma.StringWithAggregatesFilter<"Item"> | string;
    group?: Prisma.StringWithAggregatesFilter<"Item"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Item"> | string;
    forecast?: Prisma.FloatWithAggregatesFilter<"Item"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Item"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Item"> | Date | string;
};
export type ItemCreateInput = {
    id?: string;
    type: string;
    period: string;
    group: string;
    name: string;
    forecast: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.TransactionCreateNestedManyWithoutItemInput;
};
export type ItemUncheckedCreateInput = {
    id?: string;
    type: string;
    period: string;
    group: string;
    name: string;
    forecast: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutItemInput;
};
export type ItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    period?: Prisma.StringFieldUpdateOperationsInput | string;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    forecast?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.TransactionUpdateManyWithoutItemNestedInput;
};
export type ItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    period?: Prisma.StringFieldUpdateOperationsInput | string;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    forecast?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutItemNestedInput;
};
export type ItemCreateManyInput = {
    id?: string;
    type: string;
    period: string;
    group: string;
    name: string;
    forecast: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    period?: Prisma.StringFieldUpdateOperationsInput | string;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    forecast?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    period?: Prisma.StringFieldUpdateOperationsInput | string;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    forecast?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    period?: Prisma.SortOrder;
    group?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    forecast?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ItemAvgOrderByAggregateInput = {
    forecast?: Prisma.SortOrder;
};
export type ItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    period?: Prisma.SortOrder;
    group?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    forecast?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    period?: Prisma.SortOrder;
    group?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    forecast?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ItemSumOrderByAggregateInput = {
    forecast?: Prisma.SortOrder;
};
export type ItemScalarRelationFilter = {
    is?: Prisma.ItemWhereInput;
    isNot?: Prisma.ItemWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type ItemCreateNestedOneWithoutTransactionsInput = {
    create?: Prisma.XOR<Prisma.ItemCreateWithoutTransactionsInput, Prisma.ItemUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.ItemCreateOrConnectWithoutTransactionsInput;
    connect?: Prisma.ItemWhereUniqueInput;
};
export type ItemUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: Prisma.XOR<Prisma.ItemCreateWithoutTransactionsInput, Prisma.ItemUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.ItemCreateOrConnectWithoutTransactionsInput;
    upsert?: Prisma.ItemUpsertWithoutTransactionsInput;
    connect?: Prisma.ItemWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ItemUpdateToOneWithWhereWithoutTransactionsInput, Prisma.ItemUpdateWithoutTransactionsInput>, Prisma.ItemUncheckedUpdateWithoutTransactionsInput>;
};
export type ItemCreateWithoutTransactionsInput = {
    id?: string;
    type: string;
    period: string;
    group: string;
    name: string;
    forecast: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ItemUncheckedCreateWithoutTransactionsInput = {
    id?: string;
    type: string;
    period: string;
    group: string;
    name: string;
    forecast: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ItemCreateOrConnectWithoutTransactionsInput = {
    where: Prisma.ItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.ItemCreateWithoutTransactionsInput, Prisma.ItemUncheckedCreateWithoutTransactionsInput>;
};
export type ItemUpsertWithoutTransactionsInput = {
    update: Prisma.XOR<Prisma.ItemUpdateWithoutTransactionsInput, Prisma.ItemUncheckedUpdateWithoutTransactionsInput>;
    create: Prisma.XOR<Prisma.ItemCreateWithoutTransactionsInput, Prisma.ItemUncheckedCreateWithoutTransactionsInput>;
    where?: Prisma.ItemWhereInput;
};
export type ItemUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: Prisma.ItemWhereInput;
    data: Prisma.XOR<Prisma.ItemUpdateWithoutTransactionsInput, Prisma.ItemUncheckedUpdateWithoutTransactionsInput>;
};
export type ItemUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    period?: Prisma.StringFieldUpdateOperationsInput | string;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    forecast?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ItemUncheckedUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    period?: Prisma.StringFieldUpdateOperationsInput | string;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    forecast?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ItemCountOutputType = {
    transactions: number;
};
export type ItemCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transactions?: boolean | ItemCountOutputTypeCountTransactionsArgs;
};
export type ItemCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemCountOutputTypeSelect<ExtArgs> | null;
};
export type ItemCountOutputTypeCountTransactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransactionWhereInput;
};
export type ItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    period?: boolean;
    group?: boolean;
    name?: boolean;
    forecast?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    transactions?: boolean | Prisma.Item$transactionsArgs<ExtArgs>;
    _count?: boolean | Prisma.ItemCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["item"]>;
export type ItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    period?: boolean;
    group?: boolean;
    name?: boolean;
    forecast?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["item"]>;
export type ItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    period?: boolean;
    group?: boolean;
    name?: boolean;
    forecast?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["item"]>;
export type ItemSelectScalar = {
    id?: boolean;
    type?: boolean;
    period?: boolean;
    group?: boolean;
    name?: boolean;
    forecast?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "type" | "period" | "group" | "name" | "forecast" | "createdAt" | "updatedAt", ExtArgs["result"]["item"]>;
export type ItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transactions?: boolean | Prisma.Item$transactionsArgs<ExtArgs>;
    _count?: boolean | Prisma.ItemCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Item";
    objects: {
        transactions: Prisma.$TransactionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        type: string;
        period: string;
        group: string;
        name: string;
        forecast: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["item"]>;
    composites: {};
};
export type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ItemPayload, S>;
export type ItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ItemCountAggregateInputType | true;
};
export interface ItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Item'];
        meta: {
            name: 'Item';
        };
    };
    findUnique<T extends ItemFindUniqueArgs>(args: Prisma.SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ItemFindFirstArgs>(args?: Prisma.SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ItemFindManyArgs>(args?: Prisma.SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ItemCreateArgs>(args: Prisma.SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ItemCreateManyArgs>(args?: Prisma.SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ItemDeleteArgs>(args: Prisma.SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ItemUpdateArgs>(args: Prisma.SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ItemUpdateManyArgs>(args: Prisma.SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ItemUpsertArgs>(args: Prisma.SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ItemCountArgs>(args?: Prisma.Subset<T, ItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ItemCountAggregateOutputType> : number>;
    aggregate<T extends ItemAggregateArgs>(args: Prisma.Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>;
    groupBy<T extends ItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ItemGroupByArgs['orderBy'];
    } : {
        orderBy?: ItemGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ItemFieldRefs;
}
export interface Prisma__ItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    transactions<T extends Prisma.Item$transactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Item$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ItemFieldRefs {
    readonly id: Prisma.FieldRef<"Item", 'String'>;
    readonly type: Prisma.FieldRef<"Item", 'String'>;
    readonly period: Prisma.FieldRef<"Item", 'String'>;
    readonly group: Prisma.FieldRef<"Item", 'String'>;
    readonly name: Prisma.FieldRef<"Item", 'String'>;
    readonly forecast: Prisma.FieldRef<"Item", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"Item", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Item", 'DateTime'>;
}
export type ItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
    where: Prisma.ItemWhereUniqueInput;
};
export type ItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
    where: Prisma.ItemWhereUniqueInput;
};
export type ItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
    where?: Prisma.ItemWhereInput;
    orderBy?: Prisma.ItemOrderByWithRelationInput | Prisma.ItemOrderByWithRelationInput[];
    cursor?: Prisma.ItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ItemScalarFieldEnum | Prisma.ItemScalarFieldEnum[];
};
export type ItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
    where?: Prisma.ItemWhereInput;
    orderBy?: Prisma.ItemOrderByWithRelationInput | Prisma.ItemOrderByWithRelationInput[];
    cursor?: Prisma.ItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ItemScalarFieldEnum | Prisma.ItemScalarFieldEnum[];
};
export type ItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
    where?: Prisma.ItemWhereInput;
    orderBy?: Prisma.ItemOrderByWithRelationInput | Prisma.ItemOrderByWithRelationInput[];
    cursor?: Prisma.ItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ItemScalarFieldEnum | Prisma.ItemScalarFieldEnum[];
};
export type ItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ItemCreateInput, Prisma.ItemUncheckedCreateInput>;
};
export type ItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ItemCreateManyInput | Prisma.ItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    data: Prisma.ItemCreateManyInput | Prisma.ItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ItemUpdateInput, Prisma.ItemUncheckedUpdateInput>;
    where: Prisma.ItemWhereUniqueInput;
};
export type ItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ItemUpdateManyMutationInput, Prisma.ItemUncheckedUpdateManyInput>;
    where?: Prisma.ItemWhereInput;
    limit?: number;
};
export type ItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ItemUpdateManyMutationInput, Prisma.ItemUncheckedUpdateManyInput>;
    where?: Prisma.ItemWhereInput;
    limit?: number;
};
export type ItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
    where: Prisma.ItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.ItemCreateInput, Prisma.ItemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ItemUpdateInput, Prisma.ItemUncheckedUpdateInput>;
};
export type ItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
    where: Prisma.ItemWhereUniqueInput;
};
export type ItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItemWhereInput;
    limit?: number;
};
export type Item$transactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where?: Prisma.TransactionWhereInput;
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    cursor?: Prisma.TransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransactionScalarFieldEnum | Prisma.TransactionScalarFieldEnum[];
};
export type ItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
};
export {};

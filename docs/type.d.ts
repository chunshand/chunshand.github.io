export interface listDataItemInterface {
    // 主体
    text: string,
    // 简单描述
    desc: string,
    // 类别属于
    type: string[],
    // 
    link?: string
}
export interface typeDataClassifyItemInterface {
    // 标题
    title: string,
    // list
    list: string[],
    // 当前选择
    select: string
}
export interface typeDataInterface {
    classify: typeDataClassifyItemInterface[]
}
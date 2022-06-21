const Content:ContentType =  {"Datewise":["All","Today","Tomorrow","Overdue"],"Tagwise":["Personal","Home","Office","Travel"]}
type ContentType = {
    [key:string]:string[]
}
export { Content }
export type { ContentType }


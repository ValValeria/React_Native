export interface Post {
    description: string,
    user:{
        name:string
    },
    urls:{
        regular:string,
        full: string
    },
    links:{
        download:string
    },
    created_at: string,
    id: string,
}

export interface IStore { posts: Post[], navigation?:any,searchText: String, page: number, num_page: number }

export interface IResult { text: String, posts: Post[] }
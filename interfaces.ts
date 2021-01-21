export interface Post{
    title: string,
    image: string,
    author: string,
    id: number
}

export interface IStore { posts: Post[], searchText: String }

export interface IResult { text: String, posts: Post[]}
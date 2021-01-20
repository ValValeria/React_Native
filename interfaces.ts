export interface Post{
    title: string,
    image: string,
    author: string
}

export interface IStore { posts: Post[], searchText: String }

export interface IResult { text: String, posts: Post[]}
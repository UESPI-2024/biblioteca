export default interface IUser{
  id?: number
  name: string
  email: string
  idade?: number | null
  admin?: boolean
  password: string
  biblioteca_id: number | null
}
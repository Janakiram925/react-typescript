// if we want to specify array of Objects we use {}[]
type PersonListProps = {
    names: {
        firstName: string
        lastName: string
    }[]
}
export const PersonList = (props: PersonListProps) => {
    return (
        <>
       {
        props.names.map((name) => {
            return <h1>{name.firstName} {name.lastName}</h1>
        })
       }
        </>
    )

}
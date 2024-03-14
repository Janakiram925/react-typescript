type personProps = {
    name: {
        firstName: string
        lastName: string
    }
}
export const Person = (props: personProps) => {
    return <div>welcome {props.name.firstName } {props.name.lastName}</div>
}
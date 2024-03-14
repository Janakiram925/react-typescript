type Oscarprops = {
    children: React.ReactNode
}
export const Oscar = (props: Oscarprops) => {
    return (
        <span>{props.children}</span>
    )
}

export default Oscar
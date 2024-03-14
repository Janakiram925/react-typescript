type statusProps = {
    message: 'loading' | 'success' | 'error';
}
export const Status = (props: statusProps) => {
    let message;
    if(props.message === 'loading') {
        message = 'Loading'
    } else if(props.message === 'success') {
        message = 'data fetch successful'
    } else if(props.message === 'error') {
        message = 'error while fetching data'
    }
    return (
        <>
        <p>status - {message}</p>
        </>
    )
}

export default Status
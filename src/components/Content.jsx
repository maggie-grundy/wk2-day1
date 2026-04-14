function Content() {
    const name = "Bob"
    const lastName = "Smith"
    const fullName = `${name} ${lastName}`
    return (
        <>
            <main>
                <h2>Welcome to my React App</h2>
                <p>It's a paragraph! Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit. Asperiores, incidunt iste? Harum corporis quam
                ab odio amet mollitia nemo vel recusandae aperiam, assumenda incidunt 
                labore saepe exercitationem fugiat, {fullName} consectetur nisi.</p>
            </main>
        </>
    )
}

export default Content
const handleData = (type: "a" | "b" | "c") => {
    switch (type) {
        case 'a':
            return "some function"
            break;
        case 'b':
        
            break;
        case 'c':
        
            break;
        default:
            break;
    }
}

const handlers = {
    title: () => {},
    description: () => {},
    dueDate: () => {},
    id: () => {
        return handlers.title()
    },
}

const handleWithObject = (type: keyof typeof handlers) => {
    return handlers[type]()
}
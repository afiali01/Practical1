const link = function(label, path){

    const template = `<a href="${path}" data-path="${path}">${label}</a>`
    
    return template
}

export default link
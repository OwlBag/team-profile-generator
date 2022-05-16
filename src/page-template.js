// generates the HTML for each employee
const generateEmployees = employeeArr => {
    
    return `
        <section class="my-3" id="portfolio">
            <div class="col-12 col-md-6 mb-2 text-light p-3 flex-column">
                <div class="flex-row justify-space-between">
                    ${employeeArr.map(employee => {
                        let otherDataType = ''
                        let otherDataNew = ''
                        if (employee.getRole() === 'Manager') {
                            otherDataType = 'Office number'
                            otherDataNew = employee.getOfficeNumber()
                        } else if (employee.getRole() === 'Engineer') {
                            otherDataType = 'GitHub'
                            otherDataNew = `<a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a>`
                        } else if (employee.getRole() === 'Intern') {
                            otherDataType = 'School'
                            otherDataNew = employee.getSchool()
                        }

                        return `
                        <div class="col-12 mb-2 bg-dark text-light p-5 mr-3">
                            <div class="mb-3">
                                <h2 class="portfolio-item-title text-light">${employee.getName()}</h2>
                                <h3 class="portfolio-item-title text-light">${employee.getRole()}</h3>
                            </div>
                            <div class="bg-light text-dark p-3">
                                <p>ID: ${employee.getId()}</p>
                                <p>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                                <p>${otherDataType}: ${otherDataNew}</p>
                            </div>
                        </div>
                        `;
                    })
                    .join('')}
                </div>
            </div>
        </section>
    `
}
    

module.exports = templateData => {
    console.log(templateData)

    

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width", initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <h1 class="page-title text-secondary bg-dark align-center py-2 px-3">My Team</h1>
        </header>

        <main class="container my-5">
            ${generateEmployees(templateData)}
        </main>
    `
}
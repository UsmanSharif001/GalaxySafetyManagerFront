function addORHtml(formData, editable){
    if (formData === undefined) { formData = false }
    if (editable === undefined) { editable = false }
    const disableForm = formData && !editable;
    const formHeading = formData.dateTime ? "Driftjournal: " + formData.dateTime : "Udfyld Driftjournal";
    const newFormFooter = `
        <div class="form-footer">
        <a id="cancelLink" href="#OR" class="button-style secondary-button">Tilbage</a>
        <button id="pbPostOR" type="submit" class="button-style">Tilføj</button>
        </div>
    `
    const showFormFooter = `
        <div class="form-footer">
        <a href="#archiveOR" class="button-style secondary-button">Tilbage</a>
        <a href="#archiveOR&id=${formData.orId}&edit=true" id="editButton" class="button-style">Rediger</a>
        <button id="deleteButton" class="button-style">Slet</button>
        </div>
    `
    const editFormFooter = `
        <div class="form-footer">
        <a href="#archiveOR&id=${formData.orId}" id="cancelButton" class="button-style secondary-button">Annuller</a>
        <button type="submit" id="saveButton" class="button-style">Gem</button>
        </div>
    `
    const existingFormFooter = formData && editable ? editFormFooter : showFormFooter;
    const formFooter = formData ? existingFormFooter : newFormFooter;

    return `
    <div>
            <form id="postOR">
            <div class="content-container">
                 <h1>${formHeading}</h1>
                 <h3>Flugtveje</h3>
                 
                <label for="escapeRouteClear" class="checklist-item">
                Flugtveje er frie og ryddelige i hele deres bredde
                <input ${formData.escapeRouteClear ? 'checked="true"' : ''} type="checkbox" id="escapeRouteClear" name="escapeRouteClear" value="true" ${disableForm ? 'disabled' : ''}>
                </label>

                <label for="escapeRouteClear2" class="checklist-item">
                Flugtveje kan passeres i flugtretningen uden brug af nøgle eller særligt værktøj
                <input ${formData.escapeRouteClear2 ? 'checked="true"' : ''} type="checkbox" id="escapeRouteClear2" name="escapeRouteClear2" value = "true" ${disableForm ? 'disabled' : ''}>
                </label>
                
                <label for="emergencyDoorsVisible" class="checklist-item">
                Flugtvejsbelysning lyser klart og tydeligt
                <input ${formData.emergencyDoorsVisible ? 'checked="true"' : ''} type="checkbox" id="emergencyDoorsVisible" name="emergencyDoorsVisible" value = "true" ${disableForm ? 'disabled' : ''}>
                </label>
                 
                 <h3>Branddøre og pankikbelysning</h3>
                 
                <label for="emergencyLightsWork" class="checklist-item">
                Branddøres og andre selvlukkende døres lukkeanordning er funktionsduelig
                <input ${formData.emergencyLightsWork ? 'checked="true"' : ''} type="checkbox" id="emergencyLightsWork" name="emergencyLightsWork" value = "true" ${disableForm ? 'disabled' : ''}>
                </label>

                <label for="warningSystemWork" class="checklist-item">
                Alle lamper, der hører til nød- og panikbelysningen, er i orden
                <input ${formData.warningSystemWork ? 'checked="true"' : ''} type="checkbox" id="warningSystemWork" name="warningSystemWork" value = "true" ${disableForm ? 'disabled' : ''}>
                </label>
                 
                 <h3>Brandslukningsmateriel</h3>
                 
                <label for="maxCapasitiesIsVisible" class="checklist-item">
                Brandslukningsmateriel er placeret synligt og frit tilgængeligt
                <input ${formData.maxCapasitiesIsVisible ? 'checked="true"' : ''} type="checkbox" id="maxCapasitiesIsVisible" name="maxCapasitiesIsVisible" value = "true" ${disableForm ? 'disabled' : ''}>
                </label>

                <label for="inventoryComplieswithFloor" class="checklist-item">
                Brandslukningsmateriel er skiltet
                <input ${formData.inventoryComplieswithFloor ? 'checked="true"' : ''} type="checkbox" id="inventoryComplieswithFloor" name="inventoryComplieswithFloor" value = "true" ${disableForm ? 'disabled' : ''}>
                </label>

                <label for="fireExtinguisherIsCorrect" class="checklist-item">
                Brandslukningsmateriel er efterset inden for det seneste år
                <input ${formData.fireExtinguisherIsCorrect ? 'checked="true"' : ''} type="checkbox" id="fireExtinguisherIsCorrect" name="fireExtinguisherIsCorrect" value = "true" ${disableForm ? 'disabled' : ''}>
                </label>
                
                <h3>Brand- og evakueringsplan</h3>
                
                <label for="employeeInstruction" class="checklist-item">
                Personalet har modtaget instruktion i brand- og evarkueringsplanen
                <input ${formData.employeeInstruction ? 'checked="true"' : ''} type="checkbox" id="employeeInstruction" name="employeeInstruction" value = "true" ${disableForm ? 'disabled' : ''}>
                </label>

                <label for="evacuationPlanForEmployee" class="checklist-item">
                Der er ophængt brand- og evarkueringsinstruks der hvor personalet færdes
                <input ${formData.evacuationPlanForEmployee ? 'checked="true"' : ''} type="checkbox" id="evacuationPlanForEmployee" name="evacuationPlanForEmployee" value = true ${disableForm ? 'disabled' : ''}>
                </label>
                
                <h3>Tilføj bemærkninger</h3>
                
                <div>
                <p>Beskriv evt. defekter, samt hvad der er gjort for at udbedre fejlen(e).</p>
                
                <p>BEMÆRK: Arrangementet må ikke begynde, før der er lagt en forsvarlig plan for at udbedre defekten,
                og personalet er indforstået med evt. ændringer i evarkueringsplanen.</p>
                </div>
                
                <label for="errorDescription"></label>
                <textarea id="errorDescription" name="errorDescription" rows="4" cols="50" ${disableForm ? 'disabled' : ''}>${formData.errorDescription ? formData.errorDescription : ''}</textarea>

                <label for="dateTime">Dato:</label>
                <input ${formData.dateTime ? `value="${formData.dateTime}"` : ''} type="date" id="dateTime" name="dateTime" required ${disableForm ? 'disabled' : ''}>

                <label for="signature">Signatur - Udfyld med initialer:</label>
                <input ${formData.signature ? `value="${formData.signature}"` : ''} type="text" id="signature" name="signature" required ${disableForm ? 'disabled' : ''}>

            </div>
            ${formFooter}
            </form>
        </div>
    `
}

function addSSORHTML(){
    return `
    <div class="content-container">
    <h2>Add New Sprinkler System</h2>
    <form id="add-ssor-form">
        <label>Dato:</label>
        <input type="date" name="date"  /><br/>
        
        <!-- Group for Tryk under alarmventil -->
        <fieldset>
            <legend>Tryk over / under alarmventil (bar)</legend>
            <label>Tryk over våd ventil:</label>
            <input type="number" name="pressureOverWetValve"  /><br/>
            <label>Under ventiler:</label>
            <input type="number" name="pressureUnderValves"  /><br/>
        </fieldset>

        <label>Tryk på vandstik(bar)</label>
        <input type="number" name="pressureOnWaterPlug" /><br/>
        <label>Fungerende alarm til brandvæsen</label>
        <input type="checkbox" name="alarmToFireDepartmentWorking" /><br/>
        <label>Bemærkninger:</label>
        <textarea name="comments"></textarea><br/>
        <label>Underskrift</label>
        <input type="text" name="signature" /><br>

        <div class="form-footer">
        <button type="submit" class="button-style">Tilføj</button>
        <button id="cancel-add" type="button" class="button-style secondary-button">Annuller</button>
        </div></div>
    </form>
`}

export {addORHtml, addSSORHTML}
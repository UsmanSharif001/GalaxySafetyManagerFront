

function addORHtml(){
    return `
    <div id="postORdiv">
            <h2>Udfyld Driftjournal</h2>
            <form id="postOR">
              
           
         
                 <h3>Flugtveje</h3>
                 
                <label for="escapeRouteClear">Flugtveje er frie og ryddelige i hele deres bredde</label>
                <input type="checkbox" id="escapeRouteClear" name="escapeRouteClear" value = "true">
                <br>

                <label for="escapeRouteClear2">Flugtveje kan passeres i flugtretningen uden brug af nøgle eller særligt værktøj</label>
                <input type="checkbox" id="escapeRouteClear2" name="escapeRouteClear2" value = "true">
                <br>
                
                <label for="emergencyDoorsVisible">Flugtvejsbelysning lyser klart og tydeligt</label>
                <input type="checkbox" id="emergencyDoorsVisible" name="emergencyDoorsVisible" value = "true">
                <br>
                 
                 <h3>Branddøre og pankikbelysning</h3>
                 
                <label for="emergencyLightsWork">Branddøres og andre selvlukkende døres lukkeanordning er funktionsduelig</label>
                <input type="checkbox" id="emergencyLightsWork" name="emergencyLightsWork" value = "true">
                <br>

                <label for="warningSystemWork">Alle lamper, der hører til nød- og panikbelysningen, er i orden</label>
                <input type="checkbox" id="warningSystemWork" name="warningSystemWork" value = "true">
                <br>
                 
                 <h3>Brandslukningsmateriel</h3>
                 
                <label for="maxCapasitiesIsVisible">Brandslukningsmateriel er placeret synligt og frit tilgængeligt</label>
                <input type="checkbox" id="maxCapasitiesIsVisible" name="maxCapasitiesIsVisible" value = "true">
                <br>

                <label for="inventoryComplieswithFloor">Brandslukningsmateriel er skiltet</label>
                <input type="checkbox" id="inventoryComplieswithFloor" name="inventoryComplieswithFloor" value = "true">
                <br>

                <label for="fireExtinguisherIsCorrect">Brandslukningsmateriel er efterset inden for det seneste år</label>
                <input type="checkbox" id="fireExtinguisherIsCorrect" name="fireExtinguisherIsCorrect" value = "true">
                <br>
                
                <h3>Brand- og evakueringsplan</h3>
                
                <label for="employeeInstruction">Personalet har modtaget instruktion i brand- og evarkueringsplanen</label>
                <input type="checkbox" id="employeeInstruction" name="employeeInstruction" value = "true">
                <br>

                <label for="evacuationPlanForEmployee">Der er ophængt brand- og evarkueringsinstruks der hvor personalet færdes</label>
                <input type="checkbox" id="evacuationPlanForEmployee" name="evacuationPlanForEmployee" value = true>
                <br>
                
                <h3>Tilføj bemærkninger</h3>
                
                <div>
                <p>Beskriv evt. problemer, samt hvad der er gjort for at udbedre fejlen</p>
                <br>
                <p>BEMÆRK: Arrangementet må ikke begynde, før der er lagt en alternativ plan for at udbedre fejlen,
                og personalet er indforstået med evt. ændringer i evarkueringsplanen</p>
                </div>
                
                <label for="errorDescription">Tilføj Bemærkninger</label>
                <textarea id="errorDescription" name="errorDescription" rows="4" cols="50"></textarea>
                <br>

                <label for="dateTime">Dato:</label>
                <input type="date" id="dateTime" name="dateTime" required>
                <br>

                <label for="signature">Signatur - Udfyld med initialer:</label>
                <input type="text" id="signature" name="signature" required>
                <br>

                <button id ="pbPostOR" type="submit">Tilføj</button>
                <a id="cancelLink" href="#OR" class="button-style">Tilbage</a>
            </form>
        </div>
    `
}

function addSSORHTML(){
    return `
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

        <button type="submit">Tilføj</button>
        <button id="cancel-add" type="button">Fortryd</button>
    </form>
`}

export {addORHtml, addSSORHTML}
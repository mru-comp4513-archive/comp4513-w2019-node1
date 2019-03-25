
$(function () {
    $('#notifier').hide();
    
    // set up event handlers for buttons
    $('#btnUpdate').on('click', function () {
        var stock = makeStockFromForm();
        // make ajax call to our web service
        $.ajax({
            url: '/stock/' + $('#symbol').val(),
            type: 'PUT',
            dataType: 'json',
            data: stock            
        })
        .done(function(result) {
            console.log('made PUT request result=' + result.message);
            displayNotification(result.message);
        })
        .fail(function(xhr) {
            console.log('error=', xhr);
        }); 
    });
    
    
    $('#btnDelete').on('click', function () {
        var stock = makeStockFromForm();
        // make ajax call to our web service
        $.ajax({
            url: '/stock/' + $('#symbol').val(),
            type: 'DELETE'
        })
        .done(function(result) {
            console.log('made DELETE request result=' + result.message);
            displayNotification(result.message);
        })
        .fail(function(xhr) {
            console.log('error=', xhr);
        }); 
    });
    
    
    $('#btnInsert').on('click', function () {
        var stock = makeStockFromForm();
        // make ajax call to our web service
        $.ajax({
            url: '/stock/' + $('#symbol').val(),
            type: 'POST',
            dataType: 'json',
            data: stock            
        })
        .done(function(result) {
            console.log('made POST request result=' + result.message);
            displayNotification(result.message);
        })
        .fail(function(xhr) {
            console.log('error=', xhr);
        }); 
    });    
    
    
    
    function makeStockFromForm() {
        return {
            symbol: $('#symbol').val(),
            name: $('#name').val(),
            sec: $('#sec').val(),
            sector: $('#sector').val(),
            subIndustry: $('#sub').val(),
            address: $('#address').val(),
            dateAdded: $('#added').val(),
            cik: $('#cik').val(),
            freq: $('#freq').val()
        };
    }    
    
    function displayNotification(message) {
        $('#notifier').html(message);
        $('#notifier').delay(250).fadeIn();
        $('#notifier').delay(1000).fadeOut();        
    }
    
});


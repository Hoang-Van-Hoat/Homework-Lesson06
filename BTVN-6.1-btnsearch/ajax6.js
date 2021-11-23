const callAPI = () => {
    $.ajax({
        url: "https://619b426127827600174454a3.mockapi.io/apiprefix/users",
        method: "GET", // GET or POST or PUT or DELETE
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",

        success: result => {
            // hide page content
            $(".main-page .card-row").fadeOut(1000);
            $(".title").fadeOut(1000);

            // show new content
            for (let item of result) {
                $(".main-page").append(`
                <div>
                    <ul>
                        <li><b>ProductName:</b> ${item.productName}</li>
                        <li><b>Description:</b> ${item.description}</li>
                        <li><b>id:</b> ${item.id}</li>
                    </ul><hr>
                </div>
            `);
            }
        },

        error: (xhr, textStatus, errorThrown) => {
            console.log("Error loading tap to retry");
        }   
    });
};
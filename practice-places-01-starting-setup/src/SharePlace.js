import { Model } from "./UI/Model"; 

class PlaceFinder {
    constructor(){
        const addressForm = document.querySelector('form');
        const locateUsrBtn = document.getElementById('locate-btn');


        locateUsrBtn.addEventListener('click', this.locateUserHandler);
        addressForm.addEventListener('submit', this.findAddressHandler);
    }

    locateUserHandler() {
        const model = new Model('loading-modal-content');
        model.show();
        navigator.geolocation.getCurrentPosition(successResult => {
            model.hide();
            const cordinates = {
                lat: successResult.coords.latitude,
                lon: successResult.coords.longitude
            }

            console.log(cordinates);
        }, error => {
            model.hide();
            alert('Could not locate you, Please enter address manually');
        });
    }

    findAddressHandler() {

    }

}


const placeFinder = new PlaceFinder();
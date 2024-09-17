const express=require('express')
const router=express.Router();

const {infoController}=require('../../controllers')
const airplaneRoutes=require('./airplane-routes');
const cityRoutes=require('./city-routes')
const airportRoutes=require('./airport-routes')
const flightRoutes=require('./flight-routes')

router.get('/info',infoController.info)
router.use('/airplanes',airplaneRoutes);
router.use('/cities',cityRoutes);
router.use('/airports',airportRoutes);
router.use('/flights',flightRoutes);

module.exports=router;
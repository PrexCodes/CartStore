import express from 'express'
import {
    addItem,
    buyItems,
    deleteItem,
    findByName,
    viewItems
} from '../controller/ShopController';

const router = express.Router();

router.route('/getAll').get(viewItems)
router.route('/getOne/:id').get(findByName)
router.route('/addItem').post(addItem)
router.route('/buy/:id').patch(buyItems)
router.route('/delete/:id').delete(deleteItem)

export default router
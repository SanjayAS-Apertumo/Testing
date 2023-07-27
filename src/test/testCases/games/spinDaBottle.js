import {
  clickChipCoin,
  clickUpBtn,
} from '../../pageObjects/games/spinDaBottle.js';
import { assertEqual } from '../../../utils/baseAssertionLibrary.js';

// Validate the click on chip icon on onboarding screen
export async function testClickChipCoin(chipAmount) {
  const chipIconBtnStatus = await clickChipCoin(chipAmount);
  await assertEqual(chipIconBtnStatus, true, 'chip icon is not clicked');
}
// Validate the click on up button on onboarding screen
export async function testClickUpButton() {
  const doneBtnStatus = await clickUpBtn();
  await assertEqual(doneBtnStatus, true, 'Done button is not clicked');
}

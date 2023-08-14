// base action
export async function click(selector, options) {
  try {
    let result = await (await $(selector)).click(options);
    if (result === null) {
      return true;
    } else return result;
  } catch (err) {
    return err;
  }
}

export async function isEnabled(selector) {
  try {
    return await (await $(selector)).isEnabled();
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function getLocation(selector) {
  try {
    return await (await $(selector)).getLocation();
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function hideKeyboard() {
  if (!global.argsMap['browserCapability'].includes('desktop'))
    if ((await driver.isKeyboardShown()) === true) {
      await driver.hideKeyboard();
    }
}

export async function isClickable(selector) {
  try {
    return await (await $(selector)).isClickable();
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function isDisplayed(selector) {
  try {
    return await (await $(selector)).isDisplayed();
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function setValue(selector, value) {
  try {
    await clearValue(selector);
    const result = await (await $(selector)).setValue(value);
    if (result === null) {
      return true;
    } else return result;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function clearValue(selector) {
  try {
    const result = await await $(selector).clearValue();
    if (result === null) {
      return true;
    } else return result;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function waitForDisplayed(
  selector,
  ms,
  reverse,
  timeoutMsg,
  interval,
) {
  try {
    await (
      await $(selector)
    ).waitForDisplayed({
      timeout: ms,
      reverse: reverse,
      timeoutMsg: timeoutMsg,
      interval: interval,
    });
    return true;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function waitForExist(
  selector,
  ms,
  reverse,
  timeoutMsg,
  interval,
) {
  try {
    await (
      await $(selector)
    ).waitForExist({
      timeout: ms,
      reverse: reverse,
      timeoutMsg: timeoutMsg,
      interval: interval,
    });
    return true;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function waitForEnabled(
  selector,
  ms,
  reverse,
  timeoutMsg,
  interval,
) {
  try {
    await (
      await $(selector)
    ).waitForEnabled({
      timeout: ms,
      reverse: reverse,
      timeoutMsg: timeoutMsg,
      interval: interval,
    });
    return true;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function waitForClickable(
  selector,
  ms,
  reverse,
  timeoutMsg,
  interval,
) {
  try {
    await (
      await $(selector)
    ).waitForClickable({
      timeout: ms,
      reverse: reverse,
      timeoutMsg: timeoutMsg,
      interval: interval,
    });
    return true;
  } catch (err) {
    return err;
  }
}

export async function getText(selector) {
  try {
    return await (await $(selector)).getText();
  } catch (err) {
    return err;
  }
}

export async function getAttribute(selector, attributeValue) {
  try {
    return await (await $(selector)).getAttribute(attributeValue);
  } catch (err) {
    return err;
  }
}

export async function scrollBetweenTwoElement(ele1, ele2) {
  // not using for now will check function when required
  const ele1MoveX = 10; // Move up y
  const ele1MoveY = 10; // Move up y
  const ele2MoveX = -10; // Move up y
  const ele2MoveY = -10; // Move up y
  const sourceX = ele1.x + ele1MoveX;
  const sourceY = ele1.y + ele1MoveY;
  const destinationX = ele2.x + ele2MoveX;
  const destinationY = ele2.y + ele2MoveY;
  await browser.touchAction([
    {
      action: 'press',
      x: sourceX,
      y: sourceY,
    },
    {
      action: 'moveTo',
      x: destinationX,
      y: destinationY,
    },
    'release',
  ]);
  await browser.pause(500);
}

export async function scrollIntoXAxis(location) {
  const moveAmountX = -300;
  const destinationX = location.x + moveAmountX;
  await browser.touchAction([
    {
      action: 'press',
      x: location.x,
      y: location.y,
    },
    {
      action: 'moveTo',
      x: destinationX,
      y: location.y,
    },
    'release',
  ]);
  await browser.pause(500);
}

export async function getElementCount(selector) {
  try {
    return (await $$(selector)).length;
  } catch (err) {
    return err;
  }
}

export async function findElements(selector) {
  try {
    return await $$(selector);
  } catch (err) {
    return err;
  }
}
export async function scrollIntoYAxis(location) {
  const moveAmountY = -300;
  const destinationY = location.y + moveAmountY;
  await browser.touchAction([
    {
      action: 'press',
      x: location.x - 10,
      y: location.y - 10,
    },
    {
      action: 'moveTo',
      x: location.x - 10,
      y: destinationY - 10,
    },
    'release',
  ]);
  await browser.pause(500);
}

export async function scrollIntoView(selector) {
  try {
    return await browser.execute((el) => {
      el.scrollIntoView({ block: 'center', inline: 'center' });
    }, selector);
  } catch (err) {
    return err;
  }
}

export async function switchToFrame(id) {
  if (global.argsMap['platform'] === 'wap') {
    try {
      const res = await browser.switchToFrame(id);
      if (res === null) return true;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}

export async function switchToParentFrame() {
  if (global.argsMap['platform'] === 'wap') {
    try {
      await browser.pause(2000);
      const res = await browser.switchToParentFrame();
      if (res === null) {
        return true;
      } else {
        return res;
      }
    } catch (err) {
      return err;
    }
  }
}

export async function dragAndDrop(draggable, droppable) {
  try {
    const actions = {
      type: 'pointer',
      id: 'mouse1',
      parameters: { pointerType: 'touch' },
      actions: [
        {
          type: 'pointerMove',
          duration: 1000,
          origin: await $(draggable),
          x: 0,
          y: 0,
        },
        { type: 'pointerDown', button: 0 },
        {
          type: 'pointerMove',
          duration: 1000,
          origin: await $(droppable),
          x: 0,
          y: 0,
        },
        { type: 'pointerUp', button: 0 },
      ],
    };
    await browser.performActions([actions]);
    return true;
  } catch (err) {
    return err;
  }
}

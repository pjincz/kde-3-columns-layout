function layout_to(horz, vert) {
  var area = workspace.clientArea(KWin.MaximizeArea, workspace.activeClient);
  var rc = workspace.activeClient.geometry;

  rc.x = area.x + area.width / 3 * horz;
  rc.width = area.width / 3;

  if (vert === undefined || vert === null) {
    rc.y = 0;
    rc.height = area.height;
  } else {
    rc.y = area.height / 2 * vert;
    rc.height = area.height / 2;
  }
  workspace.activeClient.setMaximize(true, true);
  workspace.activeClient.geometry = rc;
}

registerShortcut("Layout Left", "Move current window to left column", "Meta+Num+4", function() { layout_to(0); });
registerShortcut("Layout Center", "Move current window to center column", "Meta+Num+5", function() { layout_to(1); });
registerShortcut("Layout Right", "Move current window to right column", "Meta+Num+6", function() { layout_to(2); });

registerShortcut("Layout Top Left", "Move current window to top of left column", "Meta+Num+7", function() { layout_to(0, 0); });
registerShortcut("Layout Top Center", "Move current window to top of center column", "Meta+Num+8", function() { layout_to(1, 0); });
registerShortcut("Layout Top Right", "Move current window to top of right column", "Meta+Num+9", function() { layout_to(2, 0); });

registerShortcut("Layout Bottom Left", "Move current window to bottom of left column", "Meta+Num+1", function() { layout_to(0, 1); });
registerShortcut("Layout Bottom Center", "Move current window to bottom of center column", "Meta+Num+2", function() { layout_to(1, 1); });
registerShortcut("Layout Bottom Right", "Move current window to bottom of right column", "Meta+Num+3", function() { layout_to(2, 1); });

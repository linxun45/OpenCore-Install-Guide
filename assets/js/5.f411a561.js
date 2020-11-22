(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{360:function(e,t,o){e.exports=o.p+"assets/img/macrecovery.af5c41c1.png"},361:function(e,t,o){e.exports=o.p+"assets/img/download-done.05d30da0.png"},370:function(e,t,o){e.exports=o.p+"assets/img/unknown-13.2dca606f.png"},489:function(e,t,o){e.exports=o.p+"assets/img/unknown-5.0cee0d3a.png"},490:function(e,t,o){e.exports=o.p+"assets/img/unknown-6.c65407b2.png"},491:function(e,t,o){e.exports=o.p+"assets/img/unknown-8.21d65816.png"},492:function(e,t,o){e.exports=o.p+"assets/img/unknown-9.d7a601da.png"},493:function(e,t,o){e.exports=o.p+"assets/img/unknown-11.0cee0d3a.png"},494:function(e,t,o){e.exports=o.p+"assets/img/unknown-12.c65407b2.png"},495:function(e,t,o){e.exports=o.p+"assets/img/unknown-14.21d65816.png"},496:function(e,t,o){e.exports=o.p+"assets/img/unknown-15.4ec42b10.png"},497:function(e,t,o){e.exports=o.p+"assets/img/unknown-16.a34cfc74.png"},498:function(e,t,o){e.exports=o.p+"assets/img/unknown-17.d7a601da.png"},499:function(e,t,o){e.exports=o.p+"assets/img/unknown-18.4d8a1388.png"},500:function(e,t,o){e.exports=o.p+"assets/img/unknown-20.7e0e5028.png"},501:function(e,t,o){e.exports=o.p+"assets/img/unknown-21.04611101.png"},632:function(e,t,o){"use strict";o.r(t);var n=o(25),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"making-the-installer-in-linux"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#making-the-installer-in-linux"}},[e._v("#")]),e._v(" Making the installer in Linux")]),e._v(" "),n("ul",[n("li",[e._v("Supported version: 0.6.3")])]),e._v(" "),n("p",[e._v("While you don't need a fresh install of macOS to use OpenCore, some users prefer having a fresh slate with their boot manager upgrades.")]),e._v(" "),n("p",[e._v("To start you'll need the following:")]),e._v(" "),n("ul",[n("li",[e._v("4GB USB Stick")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("macrecovery.py"),n("OutboundLink")],1)])]),e._v(" "),n("h2",{attrs:{id:"downloading-macos"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#downloading-macos"}},[e._v("#")]),e._v(" Downloading macOS")]),e._v(" "),n("p",[e._v("Now to start, first cd into "),n("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("macrecovery's folder"),n("OutboundLink")],1),e._v(" and run one of the following commands:")]),e._v(" "),n("p",[n("img",{attrs:{src:o(360),alt:""}})]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Adjust below command to the correct folder")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/Downloads/OpenCore-0/Utilities/macrecovery/\n")])])]),n("p",[e._v("Next, run one of the following commands depending on the OS you'd like to boot:")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Lion(10.7):")]),e._v("\n./macrecovery.py -b Mac-2E6FAB96566FE58C -m 00000000000F25Y00 download\n./macrecovery.py -b Mac-C3EC7CD22292981F -m 00000000000F0HM00 download\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Mountain Lion(10.8):")]),e._v("\n./macrecovery.py -b Mac-7DF2A3B5E5D671ED -m 00000000000F65100 download\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Mavericks(10.9):")]),e._v("\n./macrecovery.py -b Mac-F60DEB81FF30ACF6 -m 00000000000FNN100 download\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Yosemite(10.10):")]),e._v("\n./macrecovery.py -b Mac-E43C1C25D4880AD6 -m 00000000000GDVW00 download\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# El Capitan(10.11):")]),e._v("\n./macrecovery.py -b Mac-FFE5EF870D7BA81A -m 00000000000GQRX00 download\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Sierra(10.12):")]),e._v("\n./macrecovery.py -b Mac-77F17D7DA9285301 -m 00000000000J0DX00 download\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# High Sierra(10.13)")]),e._v("\n./macrecovery.py -b Mac-7BA5B2D9E42DDD94 -m 00000000000J80300 download\n./macrecovery.py -b Mac-BE088AF8C5EB4FA2 -m 00000000000J80300 download\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Mojave(10.14)")]),e._v("\n./macrecovery.py -b Mac-7BA5B2DFE22DDD8C -m 00000000000KXPG00 download\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Catalina(10.15)")]),e._v("\n./macrecovery.py -b Mac-00BE6ED71E35EB86 -m 00000000000000000 download\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Latest version")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ie. Big Sur(11)")]),e._v("\n./macrecovery.py -b Mac-E43C1C25D4880AD6 -m 00000000000000000 download\n")])])]),n("p",[e._v("From here, run one of those commands in terminal and once finished you'll get an output similar to this:")]),e._v(" "),n("p",[n("img",{attrs:{src:o(361),alt:""}})]),e._v(" "),n("ul",[n("li",[n("p",[n("strong",[e._v("Note")]),e._v(": Depending on the OS, you'll either get BaseSystem or RecoveryImage files. They both act in the same manner so when we reference BaseSystem the same info apples to RecoveryImage")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("macOS 11, Big Sur Note")]),e._v(": As this OS is quite new, there's still some issues with certain systems to resolve. For more information, see here: "),n("RouterLink",{attrs:{to:"/extras/big-sur/"}},[e._v("OpenCore and macOS 11: Big Sur")])],1),e._v(" "),n("ul",[n("li",[e._v("For first time users, we recommend macOS 10.15, Catalina")])])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Nvidia GPU Note")]),e._v(": Reminder to verify whether your hardware support newer OSes, see "),n("RouterLink",{attrs:{to:"/macos-limits.html"}},[e._v("Hardware Limitations")])],1)])]),e._v(" "),n("h2",{attrs:{id:"making-the-installer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#making-the-installer"}},[e._v("#")]),e._v(" Making the installer")]),e._v(" "),n("p",[e._v("This section will target making the necessary partitions in the USB device. You can use your favorite program be it "),n("code",[e._v("gdisk")]),e._v(" "),n("code",[e._v("fdisk")]),e._v(" "),n("code",[e._v("parted")]),e._v(" "),n("code",[e._v("gparted")]),e._v(" or "),n("code",[e._v("gnome-disks")]),e._v(". This guide will focus on "),n("code",[e._v("gdisk")]),e._v(" as it's nice and can change the partition type later on, as we need it so that macOS Recovery HD can boot. (the distro used here is Ubuntu 18.04, other versions or distros may work)")]),e._v(" "),n("p",[e._v("Credit to "),n("a",{attrs:{href:"https://github.com/midi1996",target:"_blank",rel:"noopener noreferrer"}},[e._v("midi1996"),n("OutboundLink")],1),e._v(" for his work on the "),n("a",{attrs:{href:"https://midi1996.github.io/hackintosh-internet-install-gitbook/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Internet Install Guide"),n("OutboundLink")],1),e._v(" guide which this is based off of.")]),e._v(" "),n("h3",{attrs:{id:"method-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#method-1"}},[e._v("#")]),e._v(" Method 1")]),e._v(" "),n("p",[e._v("In terminal:")]),e._v(" "),n("ol",[n("li",[e._v("run "),n("code",[e._v("lsblk")]),e._v(" and determine your USB device block\n"),n("img",{attrs:{src:o(489),alt:"lsblk"}})]),e._v(" "),n("li",[e._v("run "),n("code",[e._v("sudo gdisk /dev/<your USB block>")]),e._v(" "),n("ol",[n("li",[e._v("if you're asked what partition table to use, select GPT.\n"),n("img",{attrs:{src:o(490),alt:"Select GPT"}})]),e._v(" "),n("li",[e._v("send "),n("code",[e._v("p")]),e._v(" to print your block's partitions (and verify it's the one needed)\n"),n("img",{attrs:{src:o(370),alt:""}})]),e._v(" "),n("li",[e._v("send "),n("code",[e._v("o")]),e._v(" to clear the partition table and make a new GPT one (if not empty)\n"),n("ol",[n("li",[e._v("confirm with "),n("code",[e._v("y")]),e._v(" "),n("img",{attrs:{src:o(491),alt:""}})])])]),e._v(" "),n("li",[e._v("send "),n("code",[e._v("n")]),e._v(" "),n("ol",[n("li",[n("code",[e._v("partition number")]),e._v(": keep blank for default")]),e._v(" "),n("li",[n("code",[e._v("first sector")]),e._v(": keep blank for default")]),e._v(" "),n("li",[n("code",[e._v("last sector")]),e._v(": keep blank for whole disk")]),e._v(" "),n("li",[n("code",[e._v("Hex code or GUID")]),e._v(": "),n("code",[e._v("0700")]),e._v(" for Microsoft basic data partition type")])])]),e._v(" "),n("li",[e._v("send "),n("code",[e._v("w")]),e._v(" "),n("ul",[n("li",[e._v("Confirm with "),n("code",[e._v("y")]),e._v(" "),n("img",{attrs:{src:o(492),alt:""}})]),e._v(" "),n("li",[e._v("In some cases a reboot is needed, but rarely, if you want to be sure, reboot your computer. You can also try re-plugging your USB key.")])])]),e._v(" "),n("li",[e._v("Close "),n("code",[e._v("gdisk")]),e._v(" by sending "),n("code",[e._v("q")]),e._v(" (normally it should quit on its own)")])])]),e._v(" "),n("li",[e._v("Use "),n("code",[e._v("lsblk")]),e._v(" to determine your partition's identifiers")]),e._v(" "),n("li",[e._v("run "),n("code",[e._v('sudo mkfs.vfat -F 32 -n "OPENCORE" /dev/<your USB partition block>')]),e._v(" to format your USB to FAT32 and named OPENCORE")]),e._v(" "),n("li",[e._v("then "),n("code",[e._v("cd")]),e._v(" to "),n("code",[e._v("/OpenCore/Utilities/macrecovery/")]),e._v(" and you should get to a "),n("code",[e._v(".dmg")]),e._v(" and "),n("code",[e._v(".chunklist")]),e._v(" files\n"),n("ol",[n("li",[e._v("mount your USB partition with "),n("code",[e._v("udisksctl")]),e._v(" ("),n("code",[e._v("udisksctl mount -b /dev/<your USB partition block>")]),e._v(", no sudo required in most cases) or with "),n("code",[e._v("mount")]),e._v(" ("),n("code",[e._v("sudo mount /dev/<your USB partition block> /where/your/mount/stuff")]),e._v(", sudo is required)")]),e._v(" "),n("li",[n("code",[e._v("cd")]),e._v(" to your USB drive and "),n("code",[e._v("mkdir com.apple.recovery.boot")]),e._v(" in the root of your FAT32 USB partition")]),e._v(" "),n("li",[e._v("now "),n("code",[e._v("cp")]),e._v(" or "),n("code",[e._v("rsync")]),e._v(" both "),n("code",[e._v("BaseSystem.dmg")]),e._v(" and "),n("code",[e._v("BaseSystem.chunklist")]),e._v(" into "),n("code",[e._v("com.apple.recovery.boot")]),e._v(" folder.")])])])]),e._v(" "),n("h3",{attrs:{id:"method-2-in-case-1-didn-t-work"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#method-2-in-case-1-didn-t-work"}},[e._v("#")]),e._v(" Method 2 (in case 1 didn't work)")]),e._v(" "),n("p",[e._v("In terminal:")]),e._v(" "),n("ol",[n("li",[e._v("run "),n("code",[e._v("lsblk")]),e._v(" and determine your USB device block\n"),n("img",{attrs:{src:o(493),alt:""}})]),e._v(" "),n("li",[e._v("run "),n("code",[e._v("sudo gdisk /dev/<your USB block>")]),e._v(" "),n("ol",[n("li",[e._v("if you're asked what partition table to use, select GPT.\n"),n("img",{attrs:{src:o(494),alt:""}})]),e._v(" "),n("li",[e._v("send "),n("code",[e._v("p")]),e._v(" to print your block's partitions (and verify it's the one needed)\n"),n("img",{attrs:{src:o(370),alt:""}})]),e._v(" "),n("li",[e._v("send "),n("code",[e._v("o")]),e._v(" to clear the partition table and make a new GPT one (if not empty)\n"),n("ol",[n("li",[e._v("confirm with "),n("code",[e._v("y")]),e._v(" "),n("img",{attrs:{src:o(495),alt:""}})])])]),e._v(" "),n("li",[e._v("send "),n("code",[e._v("n")]),e._v(" "),n("ol",[n("li",[e._v("partition number: keep blank for default")]),e._v(" "),n("li",[e._v("first sector: keep blank for default")]),e._v(" "),n("li",[e._v("last sector: "),n("code",[e._v("+200M")]),e._v(" to create a 200MB partition that will be named later on OPENCORE")]),e._v(" "),n("li",[e._v("Hex code or GUID: "),n("code",[e._v("0700")]),e._v(" for Microsoft basic data partition type\n"),n("img",{attrs:{src:o(496),alt:""}})])])]),e._v(" "),n("li",[e._v("send "),n("code",[e._v("n")]),e._v(" "),n("ol",[n("li",[e._v("partition number: keep blank for default")]),e._v(" "),n("li",[e._v("first sector: keep blank for default")]),e._v(" "),n("li",[e._v("last sector: keep black for default (or you can make it "),n("code",[e._v("+3G")]),e._v(" if you want to partition further the rest of the USB)")]),e._v(" "),n("li",[e._v("Hex code or GUID: "),n("code",[e._v("af00")]),e._v(" for Apple HFS/HFS+ partition type\n"),n("img",{attrs:{src:o(497),alt:""}})])])]),e._v(" "),n("li",[e._v("send "),n("code",[e._v("w")]),e._v(" "),n("ul",[n("li",[e._v("Confirm with "),n("code",[e._v("y")]),e._v(" "),n("img",{attrs:{src:o(498),alt:""}})]),e._v(" "),n("li",[e._v("In some cases a reboot is needed, but rarely, if you want to be sure, reboot your computer. You can also try re-plugging your USB key.")])])]),e._v(" "),n("li",[e._v("Close "),n("code",[e._v("gdisk")]),e._v(" by sending "),n("code",[e._v("q")]),e._v(" (normally it should quit on its own)")])])]),e._v(" "),n("li",[e._v("Use "),n("code",[e._v("lsblk")]),e._v(" again to determine the 200MB drive and the other partition\n"),n("img",{attrs:{src:o(499),alt:""}})]),e._v(" "),n("li",[e._v("run "),n("code",[e._v('sudo mkfs.vfat -F 32 -n "OPENCORE" /dev/<your 200MB partition block>')]),e._v(" to format the 200MB partition to FAT32, named OPENCORE")]),e._v(" "),n("li",[e._v("then "),n("code",[e._v("cd")]),e._v(" to "),n("code",[e._v("/OpenCore/Utilities/macrecovery/")]),e._v(" and you should get to a "),n("code",[e._v(".dmg")]),e._v(" and "),n("code",[e._v(".chunklist")]),e._v(" files\n"),n("ol",[n("li",[e._v("mount your USB partition with "),n("code",[e._v("udisksctl")]),e._v(" ("),n("code",[e._v("udisksctl mount -b /dev/<your USB partition block>")]),e._v(", no sudo required in most cases) or with "),n("code",[e._v("mount")]),e._v(" ("),n("code",[e._v("sudo mount /dev/<your USB partition block> /where/your/mount/stuff")]),e._v(", sudo is required)")]),e._v(" "),n("li",[n("code",[e._v("cd")]),e._v(" to your USB drive and "),n("code",[e._v("mkdir com.apple.recovery.boot")]),e._v(" in the root of your FAT32 USB partition")]),e._v(" "),n("li",[e._v("download "),n("code",[e._v("dmg2img")]),e._v(" (available on most distros)")]),e._v(" "),n("li",[e._v("run "),n("code",[e._v("dmg2img -l BaseSystem.dmg")]),e._v(" and determine which partition has "),n("code",[e._v("disk image")]),e._v(" property\n"),n("img",{attrs:{src:o(500),alt:""}})]),e._v(" "),n("li",[e._v("run "),n("code",[e._v("dmg2img -p <the partition number> -i BaseSystem.dmg -o <your 3GB+ partition block>")]),e._v(" to extract and write the recovery image to the partition disk\n"),n("ul",[n("li",[e._v("It will take some time. A LOT if you're using a slow USB (took me about less than 5 minutes with a fast USB2.0 drive).\n"),n("img",{attrs:{src:o(501),alt:""}})])])])])])]),e._v(" "),n("h2",{attrs:{id:"now-with-all-this-done-head-to-setting-up-the-efi-to-finish-up-your-work"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#now-with-all-this-done-head-to-setting-up-the-efi-to-finish-up-your-work"}},[e._v("#")]),e._v(" Now with all this done, head to "),n("RouterLink",{attrs:{to:"/installer-guide/opencore-efi.html"}},[e._v("Setting up the EFI")]),e._v(" to finish up your work")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);
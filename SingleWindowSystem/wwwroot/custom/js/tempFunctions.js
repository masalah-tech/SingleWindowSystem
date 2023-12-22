// pushANotification adds a new notification
function pushANotification() {
    const notiContainer = document.querySelector("#notifications-container");

    let tempNotificationTitle = `عنوان عنوان عنوان عنوان `;
    let tempNotificationContent = `محتوى محتوى محتوى محتوى محتوى محتوى محتوى محتوى محتوى محتوى محتوى محتوى محتوى `;
    let tempNotificationTime = `قبل ساعة واحدة`;

    notiContainer.innerHTML +=
        `
            <li class="px-3 py-2">
                <div class="d-flex">
                    <!-- رابط يوجه إلى المهمة -->
                    <a href="javascript:void(0)">
                        <div class="flex-grow-1">
                            <h6 class="mb-1">${tempNotificationTitle}</h6>
                            <p class="mb-0">${tempNotificationContent}</p>
                            <small class="text-muted">${tempNotificationTime}</small>9
                        </div>
                    </a>
                    <!-- / رابط يوجه إلى المهمة -->
                    <div class="dropdown-notifications-actions flex-shrink-0">
                        <!-- تحديد كمقروء -->
                        <a href="javascript:void(0)">
                            <i class='bx bxs-circle fs-6'></i>
                        </a>
                        <!-- / تحديد كمقروء -->
                        <!-- حذف الإشعار -->
                        <a href="javascript:void(0)">
                            <span class="bx bx-x"></span>
                        </a>
                        <!-- / حذف الإشعار -->
                    </div>
                </div>
            </li>
        `;
}
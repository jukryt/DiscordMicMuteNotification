/**
 * @name MicMuteNotification
 * @author Juker
 * @description Повторяющийся звуковой сигнал при выключенном микрофоне
 * @version 1.0.0
 * @source https://github.com/jukryt/DiscordMicMuteNotification
 */

class MicMuteNotification { 

    static beep = "data:audio/mpeg;base64,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VVVVVVVVVVVVVVVVVVUAAAG+AOQP//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8=";
    static volume = 0.1;
    static interval = 2800;    

    constructor() {
        this.isMute = false;
        this.intervalId = null;
        this.audio = new Audio();
        this.audio.src = MicMuteNotification.beep;
        this.audio.volume = MicMuteNotification.volume;
    }

    switchNotificationIfNeed(isMute) {
        if (this.isMute != isMute) {
            this.isMute = isMute
            if (this.isMute) {
                this.startNotification();
            }
            else {
                this.stopNotification();
            }
        }
    }

    reset() {
        this.stopNotification();
        this.isMute = false;
    }

    startNotification() {
        if (this.intervalId === null) {
            this.intervalId = setInterval(() => this.audio.play(), MicMuteNotification.interval);
        }
    }

    stopNotification() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
}

module.exports = class MicMuteNotificationModule { 
    
    static voiceSettings = null;
    static micMuteNotification = null;

    load() {
        MicMuteNotificationModule.voiceSettings = BdApi.findModuleByProps("getEchoCancellation");
        MicMuteNotificationModule.micMuteNotification = new MicMuteNotification();
    }

    start() {
        MicMuteNotificationModule.voiceSettings.addChangeListener(this.voiceSettingsChanged);
        this.voiceSettingsChanged();
    }

    stop() {
        MicMuteNotificationModule.voiceSettings.removeChangeListener(this.voiceSettingsChanged);
        MicMuteNotificationModule.micMuteNotification.reset();
    }

    voiceSettingsChanged() {
        let isMute = MicMuteNotificationModule.voiceSettings.isMute();
        MicMuteNotificationModule.micMuteNotification.switchNotificationIfNeed(isMute);
    }
};
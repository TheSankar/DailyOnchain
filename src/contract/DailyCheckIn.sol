// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DailyCheckIn {
    struct User {
        uint48 lastCheckIn;
        uint40 streak;
    }

    mapping(address => User) private _users;

    uint256 private constant DAY = 24 hours;

    event CheckIn(address indexed user, uint256 streak, uint256 timestamp);

    function checkIn() external {
        User storage user = _users[msg.sender];
        uint256 nowTs = block.timestamp;

        if (user.lastCheckIn != 0) {
            if (nowTs < user.lastCheckIn + DAY) {
                revert("Already checked in today");
            }

            if (nowTs >= user.lastCheckIn + 2 * DAY) {
                user.streak = 1;
            } else {
                unchecked {
                    user.streak++;
                }
            }
        } else {
            user.streak = 1;
        }

        user.lastCheckIn = uint48(nowTs);
        emit CheckIn(msg.sender, user.streak, nowTs);
    }

    function getStreak(address user) external view returns (uint256) {
        return _users[user].streak;
    }

    function getLastCheckIn(address user) external view returns (uint256) {
        return _users[user].lastCheckIn;
    }
}

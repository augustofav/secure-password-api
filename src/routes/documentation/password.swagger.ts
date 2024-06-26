/**
 * @swagger
 *  /api/v1/securepassword:
 *   post:
 *     tags:
 *       - password
 *     description: Check if the password is safe
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: Password
 *         description: Check if the password is safe
 *         schema:
 *           type: object
 *           properties:
 *             password:
 *               type: string
 *               example: vYQIYxO&p$yfI^r1
 *     responses:
 *       204:
 *         description: No Content
 *       400:
 *         description: Bad Request
 */
